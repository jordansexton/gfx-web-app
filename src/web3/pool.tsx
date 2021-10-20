import { BN, Program, Provider } from '@project-serum/anchor'
import { TOKEN_PROGRAM_ID } from '@solana/spl-token'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { WalletContextState } from '@solana/wallet-adapter-react'
import { Connection, PublicKey, SystemProgram, Transaction } from '@solana/web3.js'
import { ADDRESSES } from './ids'
import { createAssociatedTokenAccountIx, findAssociatedTokenAddress, signAndSendRawTransaction } from './utils'
const PoolIDL = require('./idl/pool.json')

type Decimal = {
  flags: number
  hi: number
  mid: number
  lo: number
}

type Debt = {
  debt: Decimal
  maxDebt: Decimal
  mint: PublicKey
}

type Index = {
  key: PublicKey
  index: number
}

type ListingAccount = {
  collateral: {
    initialMargin: Decimal
    maintenanceMargin: Decimal
    mint: PublicKey
  }
  pool: PublicKey
  synths: Debt[]
  usd: Debt
}

type PoolAccount = {
  shareRate: Decimal
}

type PriceAggregatorAccount = {
  controller: PublicKey
  prices: {
    len: number
    buffer: {
      decimal: number
      price: Decimal
      status: number
      updatedAt: BN
    }[]
    feedIndex: Index[]
    mintIndex: Index[]
  }
}

type UserAccount = {
  bump: number
  claimableFee: Decimal
  collateralAmount: Decimal
  shareRate: Decimal
  shares: Decimal
}

const burn = async (
  amount: number,
  pool: string,
  synth: string,
  wallet: any,
  connection: Connection,
  network: WalletAdapterNetwork
) => {
  if (!wallet.publicKey || !wallet.signTransaction) return

  const { mints, programs, pools } = ADDRESSES[network]
  const { instruction } = getPoolProgram(wallet, connection, network)
  const tx = new Transaction()

  const userAccount = await getUserAccountPublicKey(pool, wallet, network)
  if (!(await connection.getParsedAccountInfo(userAccount)).value) {
    tx.add(await initialize(pool, wallet, connection, network))
  }

  amount = amount * 10 ** mints[synth].decimals
  const accounts = {
    controller: programs.pool.controller,
    listing: pools[pool].listing,
    pool: pools[pool].address,
    priceAggregator: programs.pool.priceAggregator,
    tokenProgram: TOKEN_PROGRAM_ID,
    synthMint: mints[synth].address,
    userAccount,
    userAta: await findAssociatedTokenAddress(wallet.publicKey, mints[synth].address),
    userWallet: wallet.publicKey
  }

  tx.add(await instruction.burn(new BN(amount), { accounts }))
  return await signAndSendRawTransaction(connection, tx, wallet)
}

const claim = async (pool: string, wallet: any, connection: Connection, network: WalletAdapterNetwork) => {
  if (!wallet.publicKey || !wallet.signTransaction) return

  const { mints, programs, pools } = ADDRESSES[network]
  const { instruction } = getPoolProgram(wallet, connection, network)
  const tx = new Transaction()

  const userAccount = await getUserAccountPublicKey(pool, wallet, network)
  if (!(await connection.getParsedAccountInfo(userAccount)).value) {
    tx.add(await initialize(pool, wallet, connection, network))
  }

  const userAta = await findAssociatedTokenAddress(wallet.publicKey, mints.gUSD.address)
  if (!(await connection.getParsedAccountInfo(userAta)).value) {
    tx.add(createAssociatedTokenAccountIx(mints.gUSD.address, userAta, wallet.publicKey))
  }

  const accounts = {
    controller: programs.pool.controller,
    listing: pools[pool].listing,
    pool: pools[pool].address,
    priceAggregator: programs.pool.priceAggregator,
    tokenProgram: TOKEN_PROGRAM_ID,
    usdMint: mints.gUSD.address,
    userAccount: await getUserAccountPublicKey(pool, wallet, network),
    userAta,
    userWallet: wallet.publicKey
  }

  tx.add(await instruction.claimFee({ accounts }))
  return await signAndSendRawTransaction(connection, tx, wallet)
}

const deposit = async (
  amount: number,
  pool: string,
  wallet: any,
  connection: Connection,
  network: WalletAdapterNetwork
) => {
  if (!wallet.publicKey || !wallet.signTransaction) return

  const { mints, programs, pools } = ADDRESSES[network]
  const { instruction } = getPoolProgram(wallet, connection, network)
  const tx = new Transaction()

  const userAccount = await getUserAccountPublicKey(pool, wallet, network)
  if (!(await connection.getParsedAccountInfo(userAccount)).value) {
    tx.add(await initialize(pool, wallet, connection, network))
  }

  amount = amount * 10 ** mints.GOFX.decimals
  const accounts = {
    controller: programs.pool.controller,
    listing: pools[pool].listing,
    pool: pools[pool].address,
    poolAta: await findAssociatedTokenAddress(pools[pool].address, mints.GOFX.address),
    priceAggregator: programs.pool.priceAggregator,
    tokenProgram: TOKEN_PROGRAM_ID,
    userAccount,
    userAta: await findAssociatedTokenAddress(wallet.publicKey, mints.GOFX.address),
    userWallet: wallet.publicKey
  }

  tx.add(await instruction.depositCollateral(new BN(amount), { accounts }))
  return await signAndSendRawTransaction(connection, tx, wallet)
}

const getPoolProgram = (wallet: WalletContextState, connection: Connection, network: WalletAdapterNetwork): Program =>
  new Program(
    PoolIDL,
    ADDRESSES[network].programs.pool.address,
    new Provider(connection, wallet as any, { commitment: 'processed' })
  )

const getUserAccountInfo = async (pool: string, wallet: any, network: WalletAdapterNetwork) =>
  await PublicKey.findProgramAddress(
    [
      new Buffer('UserAccount', 'utf-8'),
      new PublicKey(ADDRESSES[network].pools[pool].address).toBuffer(),
      new PublicKey(wallet.publicKey).toBuffer()
    ],
    ADDRESSES[network].programs.pool.address
  )

const getUserAccountPublicKey = async (pool: string, wallet: any, network: WalletAdapterNetwork) =>
  (await getUserAccountInfo(pool, wallet, network))[0]

const initialize = async (pool: string, wallet: any, connection: Connection, network: WalletAdapterNetwork) => {
  const { programs, pools } = ADDRESSES[network]
  const { instruction } = getPoolProgram(wallet, connection, network)

  const [userAccount, bump] = await getUserAccountInfo(pool, wallet, network)
  const accounts = {
    controller: programs.pool.controller,
    payer: wallet.publicKey,
    pool: pools[pool].address,
    systemProgram: SystemProgram.programId,
    userAccount
  }

  return instruction.initializeUser(bump, { accounts })
}

/* const liquidate = async (
  amount: number,
  pool: string,
  synth: string,
  wallet: any,
  connection: Connection,
  network: WalletAdapterNetwork
) => {
  if (!wallet.publicKey || !wallet.signTransaction) return

  const { mints, programs, pools } = ADDRESSES[network]
  const { instruction } = getPoolProgram(wallet, connection, network)
  const tx = new Transaction()

  const accounts = {
    collateralVault: await findAssociatedTokenAddress(programs.pool.address, mints.GOFX.address),
    controller: ADDRESSES[network].programs.pool.controller,
    liquidatedTokenMint: mints[synth].address,
    liquidatorCollateralAta: await findAssociatedTokenAddress(wallet.publicKey, mints.GOFX.address),
    liquidatorLiquidatedTokenAta: await findAssociatedTokenAddress(wallet.publicKey, mints[synth].address),
    liquidatorWallet: wallet.publicKey,
    listing: pools[pool].listing,
    pool: pools[pool].address,
    priceAggregator: ADDRESSES[network].programs.pool.priceAggregator,
    tokenProgram: TOKEN_PROGRAM_ID
    // victimUserAccount,
    // victimWallet
  }

  tx.add(await instruction.liquidate(new BN(amount), { accounts }))
  return await signAndSendRawTransaction(connection, tx, wallet)
} */

const listingAccount = async (
  pool: string,
  wallet: any,
  connection: Connection,
  network: WalletAdapterNetwork
): Promise<ListingAccount> => {
  const { pools } = ADDRESSES[network]
  const { account } = getPoolProgram(wallet, connection, network)

  return (await account.listing.fetch(pools[pool].listing)) as ListingAccount
}

const mint = async (
  amount: number,
  pool: string,
  synth: string,
  wallet: any,
  connection: Connection,
  network: WalletAdapterNetwork
) => {
  if (!wallet.publicKey || !wallet.signTransaction) return

  const { mints, programs, pools } = ADDRESSES[network]
  const { instruction } = getPoolProgram(wallet, connection, network)
  const tx = new Transaction()

  const userAta = await findAssociatedTokenAddress(wallet.publicKey, mints[synth].address)
  if (!(await connection.getParsedAccountInfo(userAta)).value) {
    tx.add(createAssociatedTokenAccountIx(mints[synth].address, userAta, wallet.publicKey))
  }

  amount = amount * 10 ** mints[synth].decimals
  const accounts = {
    controller: programs.pool.controller,
    listing: pools[pool].listing,
    pool: pools[pool].address,
    priceAggregator: ADDRESSES[network].programs.pool.priceAggregator,
    synthMint: mints[synth].address,
    tokenProgram: TOKEN_PROGRAM_ID,
    userAccount: await getUserAccountPublicKey(pool, wallet, network),
    userAta: await findAssociatedTokenAddress(wallet.publicKey, mints[synth].address),
    userWallet: wallet.publicKey
  }

  tx.add(await instruction.mint(new BN(amount), { accounts }))
  return await signAndSendRawTransaction(connection, tx, wallet)
}

const poolAccount = async (
  pool: string,
  wallet: any,
  connection: Connection,
  network: WalletAdapterNetwork
): Promise<PoolAccount> => {
  const { pools } = ADDRESSES[network]
  const { account } = getPoolProgram(wallet, connection, network)

  return (await account.pool.fetch(pools[pool].address)) as PoolAccount
}

const priceAggregatorAccount = async (
  pool: string,
  wallet: any,
  connection: Connection,
  network: WalletAdapterNetwork
): Promise<PriceAggregatorAccount> => {
  const { programs } = ADDRESSES[network]
  const { account } = getPoolProgram(wallet, connection, network)

  return (await account.priceAggregator.fetch(programs.pool.priceAggregator)) as PriceAggregatorAccount
}

const swap = async (
  pool: string,
  inTokenAmount: number,
  inToken: string,
  outToken: string,
  wallet: any,
  connection: Connection,
  network: WalletAdapterNetwork
) => {
  if (!wallet.publicKey || !wallet.signTransaction) return

  const { mints, programs, pools } = ADDRESSES[network]
  const tx = new Transaction()

  const userOutTokenAta = await findAssociatedTokenAddress(wallet.publicKey, mints[outToken].address)
  if (!(await connection.getAccountInfo(userOutTokenAta))) {
    tx.add(createAssociatedTokenAccountIx(new PublicKey(mints[outToken].address), userOutTokenAta, wallet.publicKey))
  }

  const accounts = {
    controller: programs.pool.controller,
    listing: pools[pool].listing,
    inTokenMint: mints[inToken].address,
    outTokenMint: mints[outToken].address,
    pool: pools[pool].address,
    priceAggregator: ADDRESSES[network].programs.pool.priceAggregator,
    tokenProgram: TOKEN_PROGRAM_ID,
    userAccount: await getUserAccountPublicKey(pool, wallet, network),
    userInTokenAta: await findAssociatedTokenAddress(wallet.publicKey, mints[inToken].address),
    userOutTokenAta,
    userWallet: wallet.publicKey
  }

  const { instruction } = getPoolProgram(wallet, connection, network)
  tx.add(await instruction.swap(new BN(inTokenAmount), { accounts }))

  return await signAndSendRawTransaction(connection, tx, wallet)
}

const userAccount = async (
  pool: string,
  wallet: any,
  connection: Connection,
  network: WalletAdapterNetwork
): Promise<UserAccount | undefined> => {
  const { account } = getPoolProgram(wallet, connection, network)

  const userAccount = await getUserAccountPublicKey(pool, wallet, network)
  if ((await connection.getParsedAccountInfo(userAccount)).value) {
    return (await account.userAccount.fetch(userAccount)) as UserAccount
  }
}

const withdraw = async (
  amount: number,
  pool: string,
  wallet: any,
  connection: Connection,
  network: WalletAdapterNetwork
) => {
  if (!wallet.publicKey || !wallet.signTransaction) return

  const { mints, programs, pools } = ADDRESSES[network]
  const { instruction } = getPoolProgram(wallet, connection, network)
  const tx = new Transaction()

  amount = amount * 10 ** mints.GOFX.decimals
  const accounts = {
    controller: programs.pool.controller,
    listing: pools[pool].listing,
    pool: pools[pool].address,
    poolAta: await findAssociatedTokenAddress(pools[pool].address, mints.GOFX.address),
    priceAggregator: programs.pool.priceAggregator,
    tokenProgram: TOKEN_PROGRAM_ID,
    userAccount: await getUserAccountPublicKey(pool, wallet, network),
    userAta: await findAssociatedTokenAddress(wallet.publicKey, mints.GOFX.address),
    userWallet: wallet.publicKey
  }

  tx.add(await instruction.withdrawCollateral(new BN(amount), { accounts }))
  return await signAndSendRawTransaction(connection, tx, wallet)
}

export const pool = {
  burn,
  claim,
  deposit,
  getUserAccountPublicKey,
  // liquidate,
  listingAccount,
  mint,
  poolAccount,
  priceAggregatorAccount,
  swap,
  userAccount,
  withdraw
}

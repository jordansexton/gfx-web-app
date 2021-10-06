import React, {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'
import { MARKETS } from '@project-serum/serum'
import { TokenInfo } from '@solana/spl-token-registry'
import { useWallet } from '@solana/wallet-adapter-react'
import { PublicKey } from '@solana/web3.js'
import { useCrypto } from './crypto'
import { useConnectionConfig } from './settings'
import { useTokenRegistry } from './token_registry'
import { SUPPORTED_TOKEN_LIST } from '../constants'
import { notify } from '../utils'
import { serumPlaceOrder } from '../web3'

export type OrderDisplayType = 'market' | 'limit'
export type OrderSide = 'buy' | 'sell'
export type OrderType = 'limit' | 'ioc' | 'postOnly'

export interface IOrder {
  display: OrderDisplayType
  isHidden: boolean
  price: number
  side: OrderSide
  size: number
  total: number
  type: OrderType
}

interface IOrderDisplay {
  display: OrderDisplayType
  side: OrderSide
  text: string
  tooltip: string
}

export const AVAILABLE_MARKETS = MARKETS.filter(({ deprecated, name }) => {
  const ask = (name: string) => name.slice(0, name.indexOf('/'))
  const isWrappedStableCoin = name[name.indexOf('/') + 1] === 'W'
  return !deprecated && !isWrappedStableCoin && SUPPORTED_TOKEN_LIST.find((token) => ask(name) === token)
}).sort((a, b) => a.name.localeCompare(b.name))

export const AVAILABLE_ORDERS: IOrderDisplay[] = [
  /* {
    display: 'market',
    side: 'buy',
    text: 'Market',
    tooltip: 'Market order is executed immediately at the best price available in the market.'
  }, */
  {
    display: 'limit',
    side: 'buy',
    text: 'Limit',
    tooltip: 'Limit order is executed only when the market reaches the price you specify.'
  },
  /* {
    display: 'market',
    side: 'sell',
    text: 'Market',
    tooltip: 'Market order is executed immediately at the best price available in the market.'
  }, */
  {
    display: 'limit',
    side: 'sell',
    text: 'Limit',
    tooltip: 'Limit order is executed only when the market reaches the price you specify.'
  }
]

interface IOrderConfig {
  order: IOrder
  placeOrder: () => void
  setOrder: Dispatch<SetStateAction<IOrder>>
}

const OrderContext = createContext<IOrderConfig | null>(null)

export const OrderProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { connection } = useConnectionConfig()
  const { getSymbolFromPair, selectedCrypto } = useCrypto()
  const { getTokenInfoFromSymbol } = useTokenRegistry()
  const wallet = useWallet()
  const [order, setOrder] = useState<IOrder>({
    display: 'limit',
    isHidden: true,
    price: 0,
    side: 'buy',
    size: 0,
    total: 0,
    type: 'limit'
  })

  useEffect(
    () => setOrder((prevState) => ({ ...prevState, total: order.price * order.size })),
    [order.price, order.size]
  )

  useEffect(() => {
    if (order.price > 0) {
      setOrder((prevState) => ({ ...prevState, size: order.total / order.price }))
    }

    /* eslint-disable-next-line react-hooks/exhaustive-deps */ // <- IMPORTANT
  }, [order.total])

  const placeOrder = useCallback(async () => {
    const messageOrderType = `${order.display.charAt(0).toUpperCase()}${order.display.slice(1)} order`

    try {
      const { address: mint } = getTokenInfoFromSymbol(getSymbolFromPair(selectedCrypto.pair, order.side)) as TokenInfo
      await serumPlaceOrder(connection, selectedCrypto.pair, order, wallet, new PublicKey(mint))
      notify({ type: 'success', message: `${messageOrderType} placed successfully!` })
    } catch (e: any) {
      notify({ type: 'error', message: `${messageOrderType} failed`, icon: 'error', description: e.message })
    }
  }, [connection, getSymbolFromPair, getTokenInfoFromSymbol, order, wallet, selectedCrypto.pair])

  return (
    <OrderContext.Provider
      value={{
        order,
        placeOrder,
        setOrder
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export const useOrder = (): IOrderConfig => {
  const context = useContext(OrderContext)
  if (!context) {
    throw new Error('Missing order context')
  }

  const { order, placeOrder, setOrder } = context
  return { order, placeOrder, setOrder }
}

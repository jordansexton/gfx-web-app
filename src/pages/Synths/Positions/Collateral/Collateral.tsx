import React, { FC, useMemo } from 'react'
import styled from 'styled-components'
import { Chart } from './Chart'
import { usePrices, useSynths } from '../../../../context'
import { FlexColumnDiv, SpaceBetweenDiv, SpaceEvenlyDiv } from '../../../../styles'

const INFORMATION = styled(SpaceBetweenDiv)`
  flex-direction: column;
  min-height: 150px;

  > span {
    margin-bottom: ${({ theme }) => theme.margins['3x']};
  }
`

const SPECIFIC = styled(SpaceBetweenDiv)<{ $color: string }>`
  margin-bottom: ${({ theme }) => theme.margins['3x']};

  > div {
    ${({ theme }) => theme.measurements(theme.margins['1.5x'])}
    margin-right: ${({ theme }) => theme.margins['1x']};
    ${({ theme }) => theme.roundedBorders}
    background-color: ${({ $color }) => $color};
  }

  > span:nth-child(2) {
    flex: 1;
    text-align: left;
  }

  > span:last-child {
    display: flex;
    align-items: center;
    min-width: 150px;

    &:before {
      content: '';
      display: block;
      height: 2px;
      width: 50px;
      margin: 0 ${({ theme }) => theme.margins['2x']};
      background-color: white;
    }
  }
`

const WRAPPER = styled(SpaceEvenlyDiv)`
  align-items: center;
  width: 100%;
  padding: 0 ${({ theme }) => theme.margins['3x']};

  > *:last-child {
    margin-left: ${({ theme }) => theme.margins['4x']};
  }
`

export const Collateral: FC = () => {
  const { prices } = usePrices()
  const { poolAccount } = useSynths()
  const synthColor = {
    gAAPL: { background: 'gray', hover: 'cyan' },
    gBTC: { background: 'yellow', hover: 'cyan' },
    gETH: { background: 'blue', hover: 'cyan' },
    gGOOG: { background: 'green', hover: 'cyan' },
    gTSLA: { background: 'red', hover: 'cyan' },
    gUSD: { background: 'silver', hover: 'cyan' }
  } as { [x: string]: { background: string; hover: string } }

  const synths = useMemo(() => Object.keys(poolAccount.debt).sort((a, b) => a.localeCompare(b)), [poolAccount.debt])
  const synthDebt = useMemo(() => {
    const totalDebt = Object.entries(poolAccount.debt).reduce((acc, [synth, debt]) => {
      return acc + debt * prices[synth].current
    }, 0)
    return Object.entries(poolAccount.debt)
      .sort(([a], [b, _]) => a.localeCompare(b))
      .map(([synth, debt]) => ({ synth, percentage: (debt * prices[synth].current) / totalDebt }))
  }, [poolAccount.debt, prices])

  return (
    <WRAPPER>
      <INFORMATION>
        <span>Debt structure</span>
        <FlexColumnDiv>
          {synthDebt.map(({ percentage, synth }, index) => (
            <SPECIFIC key={index} $color={synthColor[synth].background}>
              <div />
              <span>{synth}</span>
              <span>{(percentage * 100).toFixed(2)}%</span>
            </SPECIFIC>
          ))}
        </FlexColumnDiv>
      </INFORMATION>
      <Chart data={synthDebt.map(({ percentage }) => percentage)} synths={synths} synthColor={synthColor} />
    </WRAPPER>
  )
}

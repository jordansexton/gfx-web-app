import React from 'react'
import styled from 'styled-components'
import { MainButton } from '../../../components'

const CONTAINER = styled.div`
  text-align: center;
`

const BUTTON_TEXT = styled.div`
  font-weight: 700;
  font-size: 17px;
`
const TITLE = styled.h2`
  font-size: 30px;
  font-weight: 600;
  color: ${({ theme }) => theme.text2};
  margin-bottom: ${({ theme }) => theme.margin(3)};
`
const TEXT = styled.p`
  color: ${({ theme }) => theme.text2};
  margin-bottom: ${({ theme }) => theme.margin(5)};
`

interface IRemoveAskModalContent {
  removeAsk: Function
}

const RemoveAskModalContent = ({ removeAsk }: IRemoveAskModalContent) => {
  return (
    <CONTAINER>
      <TITLE>Remove Ask</TITLE>
      <TEXT>Removing the asking price will move the state of the NFT into Open Bid.</TEXT>

      <MainButton height={'60px'} width="100%" status="action" onClick={removeAsk}>
        <BUTTON_TEXT>Remove</BUTTON_TEXT>
      </MainButton>
    </CONTAINER>
  )
}

export default RemoveAskModalContent

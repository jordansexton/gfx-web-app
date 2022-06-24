import React, { FC, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { useDarkMode } from '../../context'
import { CenteredDiv, CenteredImg, SVGToGrey2, SVGToPrimary2, SVGToWhite } from '../../styles'

const TABS = ['/swap', '/trade', '/NFTs', '/farm']

const LABEL = styled.span<{ $mode: string; $hover: boolean }>`
  height: 14px;
  width: 7vw;
  ${({ theme }) => theme.flexCenter}
  font-size: 14px;
  color: ${({ $hover, $mode, theme }) =>
    $hover && $mode === 'dark'
      ? '#FFFFFF'
      : $hover && $mode !== 'dark'
      ? '#5855FF'
      : $mode === 'dark'
      ? '#4E4E4E'
      : '#636363'};
  font-weight: ${({ $hover }) => ($hover ? '600' : 'normal')};
  text-transform: capitalize;

  @media (max-width: 500px) {
    color: #4e4e4e;
    font-size: 18px;
    color: ${({ $hover }) => ($hover ? 'white' : '#4e4e4e')};

    &:hover {
      background-color: #3735bb;
      color: white;
    }
  }
`

const TAB = styled(Link)`
  ${({ theme }) => theme.flexCenter}
  flex-direction: column;

  @media (max-width: 500px) {
    position: relative;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
    
  }
`

const TAB_ICON = styled(CenteredImg)`
  margin-bottom: 10px;
  ${({ theme }) => theme.measurements(theme.margin(3))}

  @media (max-width: 500px) {
    position: absolute;
    left: 2.5rem;
    margin-bottom: 0px !important;
  }
`

const WRAPPER = styled(CenteredDiv)<{ $height: number; $index: number; $width: number }>`
  position: relative;
  ${({ theme }) => theme.roundedBorders}
  background-color: ${({ theme }) => theme.bg9};
  height: 80px;

  .arrow-down {
    width: 14px;
    height: auto;
    display: block;
  }

  &:after {
    content: '';
    position: absolute;
    left: ${({ $index, $width }) => 2 * $index * 40 + 18}px;
    top: 0;
    display: block;
    height: 8px;
    width: 44px;
    ${({ theme }) => theme.headerRoundedBorders}
    background: #5855FF;
    transition: left ${({ theme }) => theme.mainTransitionTime} ease-in-out;
  }

  > a {
    width: ${({ $width }) => $width}px;
    padding: 0 40px;
    ${({ theme }) => theme.roundedBorders}
    z-index: 1;

    > div {
      height: 27px;
      width: auto;
    }

    img {
      height: 27px;
      width: auto;
    }

    ${({ $width }) =>
      [...Array(TABS.length).keys()].map(
        (x) => `
          &:nth-child(${x + 1}) {
            left: ${x * $width * 2}px;
          }
        `
      )}

    &:first-child {
      img {
        height: 20px;
      }
    }

    @media (max-width: 500px) {
      ${({ $width }) =>
        [...Array(TABS.length).keys()].map(
          (x) => `
          &:nth-child(${x + 1}) {
            left: 0px;
          }
        `
        )}
    }
  }

  @media (max-width: 720px) {
    width: 100%;
    margin-bottom: 50px;

    > a {
      width: calc(100% / ${TABS.length});
      padding-left: 0px;
      padding-right: 0px;
    }

    &:after {
      width: calc((100% / ${TABS.length}) + ${({ theme }) => theme.margin(2)});
      left: calc(${({ $index, $width }) => $index} * (100% / ${TABS.length}) - ${({ theme }) => theme.margin(1)});
    }
  }

  @media (max-width: 500px) {
    background-color: ${({ theme }) => theme.bg1};
    width: 100%;
    margin-bottom: 0px;
    border-radius: 0px;
    flex-direction: column;
    justify-content: start;
    height: 100%;

    > a {
      width: 100%;
      font-size: 18px;
      height: 64px;
      border-radius: 0px;
      margin: 1rem 0;

      &:hover {
        background-color: #3735bb;
      }
    }

    &:after {
      width: 100%;
      left: 0;
      background: ${({ theme }) => theme.bg1};
      height: 0px;
    }
  }
`

interface IProps {
  mobileToggle?: Function
}

export const Tabs: FC<IProps> = (props: IProps): JSX.Element => {
  const { mode } = useDarkMode()
  const { pathname } = useLocation()
  const [hovered, setHovered] = useState(-1)

  const cleanedPathName = useMemo(() => {
    const match = pathname.slice(1).indexOf('/')
    return match !== -1 ? pathname.slice(0, pathname.slice(1).indexOf('/') + 1) : pathname
  }, [pathname])
  const index = useMemo(() => TABS.indexOf(cleanedPathName), [cleanedPathName])

  return (
    <WRAPPER $height={3.5} $index={index} $width={50}>
      {TABS.map((path, index) => (
        <TAB
          key={index}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(-1)}
          to={path}
          onClick={(e) => {
            if (props.mobileToggle) props.mobileToggle()
          }}
        >
          <TAB_ICON>
            {(() => {
              const icon = mode === 'dark' ? `/img/assets${path}_icon_dark.svg` : `/img/assets${path}_icon_lite.svg`

              if (cleanedPathName === path) {
                return mode === 'dark' ? (
                  <SVGToWhite src={icon} alt="gfx-tab-icon" />
                ) : (
                  <SVGToPrimary2 src={icon} alt="gfx-tab-icon" />
                )
              } else {
                return <img src={icon} alt="gfx-tab-icon" />
              }
            })()}
          </TAB_ICON>
          <LABEL $mode={mode} $hover={cleanedPathName === path}>
            {path.slice(1)}
          </LABEL>
        </TAB>
      ))}
    </WRAPPER>
  )
}

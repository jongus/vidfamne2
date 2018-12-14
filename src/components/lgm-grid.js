import React from 'react'
import styled from 'styled-components'

const config = {
  breakpoint: `768px`,
  columnsize: `11em`,
}

export class Row extends React.Component {
  selectBackgroundColor(primaryColor, secondaryColor) {
    if (secondaryColor) {
      return secondaryColor
    } else if (primaryColor) {
      return primaryColor
    } else {
      return 'inherit'
    }
  }

  render() {
    return (
      <RowStyle
        columnsize={this.props.columnsize}
        breakpoint={this.props.breakpoint}
        backgroundcolor={this.selectBackgroundColor(
          this.props.backgroundcolor,
          this.props.prebackroundcolor
        )}
      >
        <WidePreStyle
          breakpoint={this.props.breakpoint}
          backgroundcolor={this.selectBackgroundColor(
            this.props.backgroundcolor,
            this.props.prebackroundcolor
          )}
        />
        {this.props.children}
        <WidePostStyle
          breakpoint={this.props.breakpoint}
          backgroundcolor={this.selectBackgroundColor(
            this.props.backgroundcolor,
            this.props.postbackroundcolor
          )}
        />
      </RowStyle>
    )
  }
}

export const Box = styled.div`
  grid-column: ${props => (props.gridcolumn ? props.gridcolumn : '2/8')};
  background-color: ${props =>
    props.backgroundcolor ? props.backgroundcolor : 'inherit'};
  color: ${props => (props.color ? props.color : 'inherit')};
  margin: 0;
  padding: 0;
`

const RowStyle = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: ${props =>
    props.backgroundcolor ? props.backgroundcolor : 'inherit'};
  @media (min-width: ${props =>
      props.breakpoint ? props.breakpoint : config.breakpoint}) {
    display: grid;
    grid-template-columns:
      1fr repeat(
        6,
        minmax(
          auto,
          ${props => (props.columnsize ? props.columnsize : config.columnsize)}
        )
      )
      1fr;
  }
`

const WidePreStyle = styled.div`
  grid-column: 1/2;
  display: none;
  margin: 0;
  padding: 0;
  background-color: ${props =>
    props.backgroundcolor ? props.backgroundcolor : 'inherit'};
  @media (min-width: ${props =>
      props.breakpoint ? props.breakpoint : config.breakpoint}) {
    display: block;
  }
`

const WidePostStyle = styled.div`
  grid-column: 8/9;
  display: none;
  margin: 0;
  padding: 0;
  background-color: ${props =>
    props.backgroundcolor ? props.backgroundcolor : 'inherit'};
  @media (min-width: ${props =>
      props.breakpoint ? props.breakpoint : config.breakpoint}) {
    display: block;
  }
`

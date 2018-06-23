import React from 'react'
import styled from 'styled-components'

import logo from 'assets/catch-logo.svg'

const Wrapper = styled.div`
  margin: 30px 0;
  width: 100%;
  text-align: right;

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    margin: 15px 0;
  }
`

const Header = ({}) => (
  <Wrapper>
    <img src={logo} width="100" height="100"/>
  </Wrapper>
)

export default Header
import React from 'react'
import styled from 'styled-components'

import logo from 'assets/catch-logo.svg'

const Wrapper = styled.div`
  width: 100%;
  border: 1px solid red
`

const Header = ({}) => (
  <Wrapper>
    <img src={logo} />
  </Wrapper>
)

export default Header
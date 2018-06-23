import React from 'react'
import styled from 'styled-components'

import menuIcon from 'assets/icon-menu.svg'

const Container = styled.div`
  margin: 0;
  background: ${props => props.theme.menu.activeTextColor};
  height: 50px;
  width: 50px;
  position: absolute;
  top: 5%;
  left: 0;
  text-align: center;
  padding: 10px 0;
  cursor: pointer;
`

const Menu = ({}) => (
  <Container>
    <img src={menuIcon} width="24" height="30"/>
  </Container>
)

export default Menu
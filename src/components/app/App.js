import React from 'react'
import styled from 'styled-components'

import '../../themes/globalStyles'
import Header from 'components/header'

const AppWrapper = styled.div`
  width: 100%;
  max-width: ${props => props.theme.wrapper.maxWidth};
  background-color: ${props => props.theme.wrapper.bgColor};
  margin: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
`

const App = ({}) => (
  <AppWrapper>
    <Header />
    <p>Put app here</p>
  </AppWrapper>
)

export default App
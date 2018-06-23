import React from 'react'
import styled from 'styled-components'

import Header from 'components/header'

const AppWrapper = styled.div`
  width: 100%;
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
import React from 'react'
import styled from 'styled-components'

import '../../themes/globalStyles'
import Header from 'components/header'
import Menu from 'components/menu'
import Cards from 'components/cards'

import dataFilters from './../../data/filters'

const AppWrapper = styled.div`
  width: 100%;
  max-width: ${props => props.theme.wrapper.maxWidth};
  background-color: ${props => props.theme.wrapper.bgColor};
  margin: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0 5% 5%;
  position: relative;
`

const PageInfos = styled.div`
  padding: 0 10%;
  margin-bottom: 5%;
`

const PageTitle = styled.h1`
  font-weight: normal;
  margin-top: 0;
  font-size: 66px;
  letter-spacing: 5px;
  color: ${props => props.theme.menu.activeTextColor};
`

const FilterWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`
const FilterItem = styled.li`
  display: inline;
  text-transform: uppercase;
  margin: 0 50px 0 0;
  color: ${props => props.theme.menu.textColor}
`

const App = ({}) => (
  <AppWrapper>
    <Header />
    <Menu />
    <PageInfos>
      <PageTitle>Work</PageTitle>
      <FilterWrapper>
        { dataFilters.map(filter => (
          <FilterItem key={filter}>{filter}</FilterItem>
        ))}
      </FilterWrapper>
    </PageInfos>
    <Cards />
  </AppWrapper>
)

export default App
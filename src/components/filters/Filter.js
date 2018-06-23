import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import dataFilters from './../../data/filters'

let selectedFilter = 'all'

const changeFilter = filter => {
  selectedFilter = filter
}


const FilterWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`
const FilterItem = styled.li`
  display: inline;
  text-transform: uppercase;
  margin: 0 50px 0 0;
  font-size: 14px;
  color: ${props => props.active ? props.theme.menu.activeTextColor : props.theme.menu.textColor};
  cursor: pointer;
  border-bottom: ${props => props.active && `2px solid ${props.theme.menu.activeBorderColor}` };
  padding-bottom: ${props => props.active && `10px`};
`


const Filters = ({ }) => (
  <FilterWrapper>
    { dataFilters.map(filter => (
      <FilterItem 
        active={filter === selectedFilter}
        key={filter}
        onClick={() => changeFilter(filter)}
      >
        {filter}
      </FilterItem>
    ))}
  </FilterWrapper>
)

export default Filters
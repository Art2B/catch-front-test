
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import arrowIcon from 'assets/icon-chevron-down.svg'
import dataFilters from './../../data/filters'

let selectedFilter = 'all'

const changeFilter = filter => {
  selectedFilter = filter
}


const FilterContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  overflow: hidden;
`

const FiltersWrapper = styled.div`
  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    height: ${props => props.open ? 'auto' : '0'};
  }
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

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    display: block;
    border: none;
    border-left: ${props => props.active && `2px solid ${props.theme.menu.activeBorderColor}` };
    padding: 0;
    padding-left: 5px;
    margin: 5px 0;
  }
`

const FilterToggle = styled.div`
  color: ${props => props.theme.menu.textColor};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 10px;

  @media (min-width: ${props => props.theme.breakpoints.mobile}px) {
    display: none;
  }
`

const ToggleIcon = styled.img`
  margin-left: 30px;
  transform: ${props => props.open && `rotate(180deg)`};
`

const Filters = ({ }) => (
  <FilterContainer>
    <FilterToggle>
      Show Filters
      <ToggleIcon src={arrowIcon} width="14px" height="14px"/>
    </FilterToggle>
    <FiltersWrapper>
      { dataFilters.map(filter => (
        <FilterItem 
          active={filter === selectedFilter}
          key={filter}
          onClick={() => changeFilter(filter)}
        >
          {filter}
        </FilterItem>
      ))}
    </FiltersWrapper>
  </FilterContainer>
)

export default Filters
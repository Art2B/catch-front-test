import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import arrowIcon from 'assets/icon-chevron-down.svg'
import dataFilters from './../../data/filters'

const FilterContainer = styled.ul`
  margin: 0;
  padding: 0 0 12px 0;
  list-style-type: none;
  overflow: hidden;
  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
  padding: 0;
  }
`

const FiltersWrapper = styled.div`
  transition: height 0.4s;
  height: 80px;
  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    height: ${props => props.open ? '80px' : '0'};
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
  transition: transform 0.4s;
  transform: ${props => props.open && `rotate(180deg)`};
`

export default class Filters extends Component {
  constructor () {
    super()
    this.state = {
      selectedFilter: 'all',
      open: false
    }
  }

  render () {
    return (
      <FilterContainer>
        <FilterToggle onClick={() => this.setState({open: !this.state.open})}>
          Show Filters
          <ToggleIcon src={arrowIcon} open={this.state.open} width="14px" height="14px"/>
        </FilterToggle>
        <FiltersWrapper open={this.state.open}>
          { dataFilters.map(filter => (
            <FilterItem 
              active={filter === this.state.selectedFilter}
              key={filter}
              onClick={() => this.setState({selectedFilter: filter})}
            >
              {filter}
            </FilterItem>
          ))}
        </FiltersWrapper>
      </FilterContainer>
    )
  }
}
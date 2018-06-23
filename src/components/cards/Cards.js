import React from 'react'
import styled from 'styled-components'

// TODO: Change this to container
import data from './../../data/cards'

import Card from 'components/card'

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-flow: row wrap;
`

const Cards = ({}) => (
  <Wrapper>
    { data.map(card => (
      <Card key={card.id} card={card}/>
    ))}
  </Wrapper>
)

export default Cards
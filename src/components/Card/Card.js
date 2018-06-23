import React, {} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  background: ${props => props.theme.bgColor}
  flex: 1;
  flex-basis: 33%;
  padding: 20px;
`

const Title = styled.h1`
  color: ${props => props.theme.cards.textColor};
  font-weight: normal;
  margin: 0;
`

const Client = styled.p`
  color: ${props => props.theme.cards.textColor};
  font-weight: normal;
  margin: 0;
  margin-top: 20px;
`

const Card = ({ card }) => (
  <Container>
    <Title>{ card.title }</Title>
    <Client>{ card.client }</Client>
  </Container>
)

Card.propTypes = {
  card: PropTypes.object,
}

Card.defaultProps = {
  subtitle: {
    title: '',
    client: '',
    image: ''
  },
}

export default Card
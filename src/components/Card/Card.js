import React, {} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const getImagePath = path => {
  return `assets/cards/${path}`
}

const Container = styled.div`
  background-image: url(${props => props.imgPath});
  background-position: center;
  background-size: cover;
  flex: 1;
  flex-basis: 33%;
  padding: 20px;
  height: 280px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    flex-basis: 100%;
  }
`

const Title = styled.h1`
  color: ${props => props.theme.cards.textColor};
  font-weight: lighter;
  margin: 0;
  font-size: 
`

const Client = styled.p`
  color: ${props => props.theme.cards.textColor};
  font-weight: lighter;
  margin: 0;
  margin-top: 15px;
  font-size: 14px;
`

const Card = ({ card }) => (
  <Container imgPath={getImagePath(card.image)}>
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
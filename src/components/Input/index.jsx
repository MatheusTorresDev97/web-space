import React from 'react'
import { Container, InputEstilizado, IconeLupa } from './styles'
import search from './search.png'

const Input = (props) => {
  return (
    <Container>
        <InputEstilizado {...props} />
        <IconeLupa src={search} alt="ícone de lupa" />
    </Container>
  )
}

export default Input
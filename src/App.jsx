import React from 'react'
import EstilosGlobais from "./components/EstilosGlobais"
import { FundoGradiente, AppContainer, MainContainer } from './styles'
import Header from "./components/Header"
import BarraLateral from './components/BarraLateral'

const App = () => {
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
      <Header />
      <MainContainer>
        <BarraLateral />
      </MainContainer>
      </AppContainer>
      </FundoGradiente>
  )
}

export default App
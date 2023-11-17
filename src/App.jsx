import React from 'react'
import EstilosGlobais from "./components/EstilosGlobais"
import { FundoGradiente, AppContainer } from './styles'

const App = () => {
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
      App
      </AppContainer>
      </FundoGradiente>
  )
}

export default App
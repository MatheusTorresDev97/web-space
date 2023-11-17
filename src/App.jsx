import { useState } from 'react'
import EstilosGlobais from "./components/EstilosGlobais"
import { FundoGradiente, AppContainer, MainContainer, ConteudoGaleria } from './styles'
import bannerBackground from './assets/banner.png'
import fotos from './fotos.json'

import Header from "./components/Header"
import BarraLateral from './components/BarraLateral'
import Banner from "./components/Banner"
import Galeria from "./components/Galeria"
import ModalZoom from "./components/ModalZoom"
import Rodape from './components/Rodape'

const App = () => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos)
  const [fotoSelecionada, setFotoSelecionada] = useState(null)

  const aoAlternarFavorito = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      })
    }
    setFotosDaGaleria(fotosDaGaleria.map(fotoDaGaleria => {
      return {
        ...fotoDaGaleria,
        favorita: fotoDaGaleria.id === foto.id ? !foto.favorita : fotoDaGaleria.favorita
      }
    }))
  }

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
      <Header />
      <MainContainer>
        <BarraLateral />
        <ConteudoGaleria>
        <Banner
              texto="A galeria mais completa de fotos do espaço!"
              backgroundImage={bannerBackground}
            />
            <Galeria 
              aoFotoSelecionada={foto => setFotoSelecionada(foto)} 
              aoAlternarFavorito={aoAlternarFavorito}
              fotos={fotosDaGaleria}
            />
        </ConteudoGaleria>
      </MainContainer>

      </AppContainer>
      <Rodape />
      <ModalZoom 
        foto={fotoSelecionada}
        aoFechar={() => setFotoSelecionada(null)}
        aoAlternarFavorito={aoAlternarFavorito}
      />
      </FundoGradiente>
  )
}

export default App
import { GaleriaContainer, ImagensContainer, SecaoFluida } from "./styles.js";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Imagem from "./Imagem"
import Populares from "./Populares"

// eslint-disable-next-line react/prop-types
const Galeria = ({ fotos = [], aoFotoSelecionada, aoAlternarFavorito }) => {
  return (
      <>
          <Tags />
          <GaleriaContainer>
              <SecaoFluida>
                  <Titulo>Navegue pela galeria</Titulo>
                  <ImagensContainer>
                      {fotos.map(foto => <Imagem 
                          aoZoomSolicitado={aoFotoSelecionada}
                          aoAlternarFavorito={aoAlternarFavorito}
                          key={foto.id} 
                          foto={foto} />)
                      }
                  </ImagensContainer>
              </SecaoFluida>
              <Populares />
          </GaleriaContainer>
      </>
  )
}

export default Galeria;

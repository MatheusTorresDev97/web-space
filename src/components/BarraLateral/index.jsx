import React from "react";
import { ListaEstilizada } from "./styles";
import ItemNavegacao from "./ItemNavegacao";
import items from "./items.json";

const BarraLateral = () => {
  return (
    <aside>
      <nav>
        <ListaEstilizada>
          {items.map((item) => (
            <ItemNavegacao
              key={item.id}
              iconeAtivo={item.iconeAtivo}
              iconeInativo={item.iconeInativo}
              ativo={item.ativo}
            >
              {item.texto}
            </ItemNavegacao>
          ))}
        </ListaEstilizada>
      </nav>
    </aside>
  );
};

export default BarraLateral;

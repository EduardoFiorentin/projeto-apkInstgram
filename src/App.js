import './App.css';
import React, { Component } from 'react';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography';
import './assets/css/reset.css'
import Cabecalho from './elementos/cabecalho/cabecalho'
import Corpo from './elementos/corpo/corpo'
import Rodape from './elementos/rodape/rodape'

class App extends Component {
  constructor() {
    super()
    this.state = [
      {"nome": "Eduardo", "local": "Rica pancita", "pCurtir": "Emanuelson", "descrissao":"Lorem ipsum dolor sit amet consectetur adipisicing elit", "Comentarios": [["nome", "paragrafo"], ["nome", "paragrafo"], ["nome", "paragrafo"]]},
      {"nome": "Vinicius", "local": "Rua das baleias", "pCurtir": "Jubiscleberson", "descrissao":"Lorem ipsum dolor sit amet consectetur adipisicing elit", "Comentarios": [["nome", "paragrafo"], ["nome", "paragrafo"], ["nome", "paragrafo"]]},
      {"nome": "Emanuel", "local": "Linha Saracura", "pCurtir": "Zé Galinha", "descrissao":"Lorem ipsum dolor sit amet consectetur adipisicing elit", "Comentarios": [["nome", "paragrafo"], ["nome", "paragrafo"], ["nome", "paragrafo"]]},
      {"nome": "Matheus", "local": "Porto das saracuras", "pCurtir": "Mario", "descrissao":"Lorem ipsum dolor sit amet consectetur adipisicing elit", "Comentarios": [["nome", "paragrafo"], ["nome", "paragrafo"], ["nome", "paragrafo"]]}
    ]
  }
  
  render() {
    return (
      <Container maxWidth="md" component="main" disableGutters className="instagram">
          <Cabecalho/>
        <section className="corpo">
          <Corpo publicacoes={this.state}/>
        </section>
        <section className="rodape">
          <Rodape/>
        </section>
      </Container>
    )
  }
}

export default App;

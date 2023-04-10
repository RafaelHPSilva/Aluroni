import  styles  from './cardapio.module.scss'
import Buscador from './buscador/Buscador'
import { useState } from 'react'
import Filtros from 'pages/Cardapio/Filtros/Filtros'
import Ordenador from 'pages/Cardapio/Ordenador/Ordenador'
import  Itens  from 'pages/Cardapio/Itens/Itens'
import stylesTema from 'Styles/Tema.module.scss'

export default function Cardapio() {
  const [busca,setBusca] = useState('')
  const [filtro, setFiltro]= useState<number|null>(null)
  const[ordenador, setOrdenador] = useState('')

  return(
    <section className={styles.cardapio}>
      <h3 className={stylesTema.titulo}>
          A casa do código e da massa
      </h3>

      <Buscador
        busca = {busca} 
        setBusca={setBusca} 
      />

      <div className={styles.cardapio__filtros}>
        <Filtros filtro={filtro} setFiltro={setFiltro}/>
        <Ordenador ordenador={ordenador} setOrdenador={setOrdenador}/>
      </div>
      <Itens busca={busca} filtro={filtro} ordenador={ordenador}/>
    </section>
  )
}
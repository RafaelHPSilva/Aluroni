import cardapio from 'Data/cardapio.json'
import styles from './inicio.module.scss'
import stylesTema from 'Styles/Tema.module.scss'
import nossaCasa from 'assets/inicio/nossa_casa.png'
import { useNavigate } from 'react-router-dom'
import {Prato} from 'Types/Prato/prato'

export default function Inicio() {
  let pratosRecomendados= [...cardapio]
  pratosRecomendados = pratosRecomendados.sort(()=>0.5 - Math.random()).splice(0,3)

  const navigate = useNavigate()

  function RedirecionarParaDetalhes(prato: Prato) {
    navigate(`/prato/${prato.id}`, { state: {prato}, replace: true})
  }
  return(
    <section>
      <h3 className={stylesTema.titulo}>Recomendaçoes do Chef</h3>
      
      <div className={styles.recomendados}>{pratosRecomendados.map(item=>
        (
          <div className={styles.recomendado} key={item.id}>            
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>
  
            <button 
              onClick={()=> RedirecionarParaDetalhes(item)}
              className={styles.recomendado__botao}>
                Ver mais  
            </button>            
          </div>
        )
      )}
      </div>

      <h3 className={stylesTema.titulo}>Nossa Casa</h3>

      <div className={styles.nossaCasa}>
        <img src={nossaCasa} alt="Imagem da casa Aluroni" />
        <div className={styles.nossaCasa__endereco}>
          Rua dos Nerds, 1400 <br/> <br/> Vila Mariana -São Paulo
        </div>
      </div>
    </section>
  )
}
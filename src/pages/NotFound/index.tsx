import styles from './notFound.module.scss'
import stylesTema from 'Styles/Tema.module.scss'
import classNames from 'classnames'
import { ReactComponent as NotFoundImage } from 'assets/not_found.svg'
import { useNavigate } from 'react-router-dom'

export default function NotFound(){
  const navigate = useNavigate()
  return(    
    <div className={classNames({
      [styles.container]:true,
      [stylesTema.container]: true
    })
    }>
      <div className={styles.voltar}>
        <button onClick={()=>navigate(-1)}>
          {'<Voltar'}
        </button>
      </div>
      <div>
        <NotFoundImage/>
      </div>
    </div>
  )
}
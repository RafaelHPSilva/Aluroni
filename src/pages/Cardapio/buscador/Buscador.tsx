import  React from 'react'
import  styles  from './buscador.module.scss'
import { CgSearch } from 'react-icons/cg'

interface Props{
  busca: string
  setBusca: React.Dispatch<React.SetStateAction<string>>
}
export default function Buscador({busca,setBusca}:Props) {
  return(
    <div className={styles.buscador}>
      <input type="search" 
        name="" 
        id="" 
        value={busca}
        onChange={(event)=> setBusca(event.target.value)}
      />
      <CgSearch
        size={15}
        color= '#4C4D5E'
      />
    </div>
  )
}
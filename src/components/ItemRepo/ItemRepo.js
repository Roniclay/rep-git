import React from 'react'
import { ItemContainer } from './styles'

const ItemRepo = ({repo, onClick}) => {
  return (
    <ItemContainer>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} target='_blank'>
          <button className='see'>Ver repositório</button>
        </a><br></br>
        <button className='remove' onClick={() => onClick(repo.id)}>Remover</button>
    </ItemContainer>
  )
}

export default ItemRepo
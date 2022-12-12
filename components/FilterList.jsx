import { stores } from '../pages/api/list'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export function ItemList({ filterItem, setItem }){
  const [openList, setOpenList] = useState(false)
  const categoryList = ["accesorios", "indumentaria", "deportes", "tecnología", "formal", "casual", "gastronomía"]

  return(
    <div id='filters-container'>
      <div id='filters-title-container' onClick={() => {setOpenList(!openList)}}>
          <h2 id='filters-title'>filtros</h2>
          <FontAwesomeIcon icon={faChevronDown} className={openList ? "rotate-chevron" : ""} />
      </div>
      <ul className={`filter-list${openList ? " open-filter-list" : ""}`}>
          <li className="filter-item" onClick={() => {setItem(stores)}}>ver todo</li>
          {categoryList.map((cat) => (
          <li
            className="filter-item"
            onClick={() => filterItem(cat)}
            key={cat}>
            {cat}
          </li> 
        ))
      }
      </ul>
    </div>
  )
}
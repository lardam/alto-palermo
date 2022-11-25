import { stores } from './api/list'
import { Card } from '../components/StoreCard'
import { ItemList } from '../components/FilterList'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function Stores(){
    const [openList, setOpenList] = useState(false)
    const [item, setItem] = useState(stores)

    const filterItem = (current) => {
        const newItem = stores.filter((newVal) => {
          return newVal.tags.find(tag => tag === current);
        });
        setItem(newItem);
      };
    return(
        <main id="main-stores">
            <h1 id="stores-title">locales</h1>
            <div id='filters-container'>
                <div id='filters-title-container' onClick={() => {setOpenList(!openList)}}>
                    <h2 id='filters-title'>filtros</h2>
                    <FontAwesomeIcon icon={faChevronDown} className={openList ? "rotate-chevron" : ""} />
                </div>
                <ul id='filter-list' className={`filter-list${openList ? " open-filter-list" : ""}`}>
                    <ItemList 
                    filterItem={filterItem}
                    setItem={setItem}
                    />
                </ul>
            </div>
            <div id="stores-container">
                <div id="stores-grid">
                        <Card items={item} />
                </div>
            </div>
        </main>
    )
}
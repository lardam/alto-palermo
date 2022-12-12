import { stores } from './api/list'
import { Card } from '../components/StoreCard'
import { ItemList } from '../components/FilterList'
import { useState } from 'react'

export default function Stores(){
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
            <ItemList filterItem={filterItem} setItem={setItem} />
            <div id="stores-container">
                <div id="stores-grid">
                        <Card items={item} />
                </div>
            </div>
        </main>
    )
}
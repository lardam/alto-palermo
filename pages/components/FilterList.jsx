import { stores } from "../api/list"

export function ItemList({ filterItem, setItem }){
    const categoryList = ["accesorios", "indumentaria", "deportes", "tecnología", "formal", "casual", "gastronomía"]

    return(
        <>
            <li className="filter-item" onClick={() => setItem(stores)}>ver todo</li>
            {categoryList.map((cat) => (
            <li
              className="filter-item"
              onClick={() => {filterItem(cat)}}
              key={cat}>
              {cat}
            </li>
          ))
        }
        </>
    )
}
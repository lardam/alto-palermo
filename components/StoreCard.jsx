import Link from 'next/link'

export function Card({ item }){
    return(
        <>
            {item.map(item => (
                <div className="store" key={item.id}>
                    <div className="top-info-container">
                        <div className="store-img-container">
                            {/* <Image src={store.imgsrc} alt={`${store.name} logo`} fill /> */}
                        </div>
                        <div className="store-info-container">
                            <h2 className="store-title">{item.name}</h2>
                            <p className="store-add-info">{item.location}</p>
                            <Link className="store-add-info" href={`https://${item.web}`}>Sitio web</Link>
                            <p className="store-add-info">{item.telephone}</p>
                        </div>
                    </div>
                    <div className="store-tags">
                            <ul className="store-tag-list">
                                {/* {store.tags.map(tag => <li className='store-tag' key={store.name + '-' + tag}>{tag}</li>)} */}
                            </ul>
                    </div>
                </div>
            ))}
        </>
    )
}
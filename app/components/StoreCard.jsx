<div className="store">
<div className="top-info-container">
    <div className="store-img-container">
        <Image src={store.img-src} alt="nike logo" fill />
    </div>
    <div className="store-info-container">
        <h2 className="store-title">{store.store}</h2>
        <p className="store-add-info">{store.location}</p>
        <p className="store-add-info">{store.web}</p>
        <p className="store-add-info">{store.telephone}</p>
    </div>
</div>
<div className="store-tags">
        <ul className="store-tag-list">
            <li className="store-tag">Deportes</li>
            <li className="store-tag">Hombre</li>
            <li className="store-tag">Mujer</li>
            <li className="store-tag">Infancias</li>
        </ul>
</div>
</div>

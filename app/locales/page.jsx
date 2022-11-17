const fetchStores = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
}

export default async function Stores({ params }){
    const stores = await fetchStores()

    return(
        <main id="main-stores">
            <h1 id="stores-title">locales</h1>
            <div id="stores-container">
                <div id="stores-grid">
                    {stores.map(store => (
                        <>
                            <p>{store.title}</p>
                        </>
                    ))}
                </div>
            </div>
        </main>
    )
}
import { useEffect, useState } from "react"

const ProductsPage = () => {

    const API_URL = import.meta.env.VITE_API_URL
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(`${API_URL}products/category/electronics`)
            .then((results) => results.json())
            .then((data) => setProducts(data))

        fetch(`${API_URL}products/category/jewelery`)
            .then((results) => results.json())
            .then((data) => setJoias(data))

    }, [])

    return (
        <section>
            <h1>Objetos valiosos</h1>
            {products.map(cachaca => (
                <div>
                    <h2>{cachaca.title}</h2>
                    <img src={cachaca.image} />
                    <p>{cachaca.description}</p>
                    <p>{cachaca.category}</p>
                    <p>{cachaca.rate}</p>
                    <p>{cachaca.count}</p>
                </div>


            ))}
        </section >
    )
}

export default ProductsPage
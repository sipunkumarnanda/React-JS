
import {createRoot} from 'react-dom/client'
import './style.css'

console.log("Hello world");

async function fetechProducts() {
    const response = await fetch('https://dummyjson.com/products')
    const {products} = await response.json()
    return products
}

function Card(key, title, price, image, brand) {
    return (
        <div className="card" key={key}> 
    <img src={image} />
    <h3>{title}</h3>
    <p>{brand}</p>
    <p><b>${price}</b></p>
</div>
    )
}



const container = [Card(1), Card(2), Card(3), Card(4), Card(5)]

const root = createRoot(document.getElementById('root'))
// root.render(<div className='container'>{container}</div>)  

fetechProducts().then((data)=>{
   let container2 = data.map((prod)=>{
    return Card(prod.id, prod.title, prod.price, prod.images[0], prod?.brand)
   })

   root.render(<div className='container'>{container2}</div>)  
})
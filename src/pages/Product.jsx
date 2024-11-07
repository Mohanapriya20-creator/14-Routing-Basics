import { Link } from "react-router-dom";

const PRODUCTS=[
    {id:1, name:'Product 1'},
    {id:2, name:'Product 2'},
    {id:3, name:'Product 3'}
];


export default function Product(){
    return <div>
        <h1>Product</h1>
        <p>Welcome to the product page!</p>
        <ul>
           {PRODUCTS.map((product)=>(
           <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
           </li>
           ))}
        </ul>
        </div>
}

import { useEffect, useState } from "react"
import {useNavigate} from 'react-router-dom'

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        getProducts();
    },[])

    const getProducts = async() => {
        let result = await fetch('http://127.0.0.1:8000/products');
        setProducts(await result.json());
    }
    const deleteProduct = async(id) => {
        let result = await fetch(`http://127.0.0.1:8000/product/${id}`,{
            method:'delete'
        })
        result = await result.json();
        if(result){
            alert('Record deleted');
            getProducts();
        }
    }
    const updateProduct = (id) => {
        navigate('/update/'+id);
    }
    const handleSearch = async(e) => {
        let key = e.target.value;
        let result = await fetch(`http://127.0.0.1:8000/search/${key}`);
        result = await result.json();
        if(result){
        setProducts(result)
        }
    }
    return(
        <div className="product-list">
        <h1>Product List</h1>
        <input type="text" style={{margin:"10px", padding:"5px", width:"300px"}}
        onChange={(e)=>handleSearch(e)} placeholder="Search products here.."/>
        <ul>
            <li>S.No.</li>
            <li>Product Name</li>
            <li>Price</li>
            <li>Category</li>
            <li>Company</li>
            <li>Action</li>
        </ul>
        {products.length>0 ?
            products.map((item, index)=>
            <ul>
            <li>{index+1}</li>
            <li>{item.name}</li>
            <li>{item.price}</li>
            <li>{item.category}</li>
            <li>{item.company}</li>
            <li>
            <button onClick={()=>deleteProduct(item._id)}>Delete</button>
            <button style={{marginLeft:"5px"}} onClick={()=>updateProduct(item._id)}>Update</button>
            </li>
            </ul>
        )
        :
            <h3>No Record !</h3>
        }
        </div>
    )
}

export default ProductList
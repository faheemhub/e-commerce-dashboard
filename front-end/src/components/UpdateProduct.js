import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [category, setCategory] = useState();
    const [company, setCompany] = useState();
    const [err, setErr] = useState(false);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        getData();
    },[])
    async function getData(){
        let result = await fetch(`http://127.0.0.1:8000/product/${params.id}`,{
            method:'get'
        });
        result = await result.json();
        console.log(result)
        console.log(params)
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
    }
   
    const updateProduct = async(id) => {
        if(!name||!price||!category||!company){
            setErr(true)
        return false
        }
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch('http://127.0.0.1:8000/product/'+id,{
            method:'put',
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{"Content-Type":"application/json"}
        });
        result = await result.json();
        alert("Data updated successfully");
        navigate('/');      
    }
    return(
        <div className="product">
        <h1>Update Product Details</h1>
        <input type="text" className="inputBox" placeholder="Enter Name" value={name}
            onChange={(e)=>setName(e.target.value)}/>
        <input type="text" className="inputBox" placeholder="Enter Price" value={price}
            onChange={(e)=>setPrice(e.target.value)}/>
        <input type="text" className="inputBox" placeholder="Enter Category" value={category}
            onChange={(e)=>setCategory(e.target.value)}/>
        <input type="text" className="inputBox" placeholder="Enter Company" value={company}
            onChange={(e)=>setCompany(e.target.value)}/>
        <button className="appBtn" onClick={()=>updateProduct(params.id)}>Update Product</button>
        </div>
    )
}

export default UpdateProduct
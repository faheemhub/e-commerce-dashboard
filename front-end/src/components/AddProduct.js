import React, { useState } from "react";

const AddProduct = () => {
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [category, setCategory] = useState();
    const [company, setCompany] = useState();
    const [err, setErr] = useState(false);

    const AddProduct = async() => {
        if(!name||!price||!category||!company){
            setErr(true)
        return false
        }
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        const result = await fetch('http://127.0.0.1:8000/add-product',{
            method:'post',
            body:JSON.stringify({name,price,category,userId,company}),
            headers:{"Content-Type":"application/json"}
        })
        const data = await result.json();
        console.log(data);
        alert('Record Added')
    }
    return(
        <div className="product">
        <h1>Enter Product Details</h1>
        <input type="text" className="inputBox" placeholder="Enter Name"
            onChange={(e)=>setName(e.target.value)}/>
            {err && !name && <span className="invalid-input">Enter Valid Name</span>}
        <input type="text" className="inputBox" placeholder="Enter Price"
            onChange={(e)=>setPrice(e.target.value)}/>
            {err && !price && <span className="invalid-input">Enter Valid Price</span>}
        <input type="text" className="inputBox" placeholder="Enter Category"
            onChange={(e)=>setCategory(e.target.value)}/>
             {err && !category && <span className="invalid-input">Enter Valid Category</span>}
        <input type="text" className="inputBox" placeholder="Enter Company"
            onChange={(e)=>setCompany(e.target.value)}/>
            {err && !company && <span className="invalid-input">Enter Valid Company</span>}
        <button className="appBtn" onClick={AddProduct}>Add Product</button>
        </div>
    )
}

export default AddProduct
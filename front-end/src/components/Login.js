import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () =>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        let auth = localStorage.getItem('user');
        if(auth){
            navigate('/');
        }
    });
    const handleLogin = async() => {
        console.log(email,password);
        let result = await fetch('http://localhost:8000/login',{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{"Content-Type":"application/json"}
        });
        result = await result.json();
        console.log(result);
        if(result.email){
            localStorage.setItem('user', JSON.stringify(result));
            navigate('/')
        }else{
            alert('please enter correct details');
        }
    }

    return(
        <div className="login">
        <h1>Login</h1>
        <input className="inputBox" type="email" value = {email}
        onChange={e=>setEmail(e.target.value)} placeholder="Enter Email"/>
        <input className="inputBox" type="password" value = {password}
        onChange={e=>setPassword(e.target.value)} placeholder="Password"/>
        <button className='appBtn' type="button" onClick={handleLogin}>Login</button>
        </div>
    )
}
export default Login;
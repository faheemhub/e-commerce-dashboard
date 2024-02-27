import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        let auth = localStorage.getItem('user');
        if(auth){
        navigate('/');
        }
    })
    const collectData = async() => {
        if(!name||!email||!password){
            setErr(true);
            return false;
        }
        // console.warn(name,email,password);
        const result = await fetch('http://localhost:8000/register',{
            method:'post',
            body: JSON.stringify({name,email,password}),
            headers:{"Content-Type":"application/json"}
        })
        const data = await result.json();
        localStorage.setItem('user', JSON.stringify(data));
        console.log(data);
        navigate('/');
    }
    return(
        <div className="register">
        <h1>Register</h1>
        <input className="inputBox" type="text" value = {name}
        onChange={e=>setName(e.target.value)} placeholder="Enter Name"/>
        {err && !name && <span className="invalid-input">Enter valid Name</span>}
        <input className="inputBox" type="email" value = {email}
        onChange={e=>setEmail(e.target.value)} placeholder="Enter Email"/>
        {err && !email && <span className="invalid-input">Enter valid email</span>}
        <input className="inputBox" type="password" value = {password}
        onChange={e=>setPassword(e.target.value)} placeholder="Password"/>
        {err && !password && <span className="invalid-input">Enter valid password</span>}
        <button className='appBtn' type="button" onClick={collectData}>Sign Up</button>
        </div>
    )
}
export default SignUp
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'

function Login(){

    const navigate = useNavigate();
    const [login, setLogin] = useState({
        username: '',
        password: ''
    })
    const [alert, setAlert] = useState({
        isActive: false,
        alertMessage: ''
    })
    const handleChange = (event)=>{
        const { name, value } = event.target
        setLogin({
            ...login,
            [name] : value
        })
    }

    const handleLogin = async ()=>{
        const userLogin = await axios.post('/account/login', login)
        if(userLogin.data.message === 'success'){
            window.localStorage.setItem('loginStatus', userLogin.data.isLogin)
            navigate('/')
            window.location.reload()
        }else{
            console.log(userLogin.data.message)
            setAlert({
                ...alert,
                isActive: true,
                alertMessage: userLogin.data.message
            })

            // add set timeout to make the alert back to its previews data
            setTimeout(()=>{
                setAlert({
                    ...alert,
                    isActive: false,
                    alertMessage: ''
                })
            }, 2000)
        }
    }

    return (
        <div className="login__container bg-primary w-100 h-auto min-vh-100 d-flex align-items-center justify-content-center">
            <div className="login__card bg-white p-5 rounded d-flex flex-column justify-content-center">
                <div className='text-center mb-5'>
                    <h1 className='fw-bold fs-1'>LOG IN</h1>
                    <p className='fw-semibold'>Barangay management system</p>
                </div>

                <div 
                    class="alert alert-danger" 
                    role="alert"
                    style={{display: alert.isActive ? 'block' : 'none'}}
                >
                    {alert.alertMessage}
                </div>

                <form className='d-flex flex-column'>
                    <div className="input-group mb-4">
                        <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faUser}/></span>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Username" 
                            aria-label="Username" 
                            aria-describedby="basic-addon1" 
                            name='username'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-group mb-4">
                        <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faLock}/></span>
                        <input 
                            type="password" 
                            className="form-control" 
                            placeholder="Password" 
                            aria-label="Username" 
                            aria-describedby="basic-addon1"
                            name='password' 
                            onChange={handleChange}
                        />
                    </div>
                    <button 
                        type="button" 
                        className="btn btn-primary w-25 align-self-end"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/fontawesome-svg-core'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'

function Login(){
    return (
        <div className="login__container bg-primary w-100 h-auto min-vh-100 d-flex align-items-center justify-content-center">
            <div className="login__card bg-white p-5 rounded d-flex flex-column justify-content-center">
                <div className='text-center mb-5'>
                    <h1 className='fw-bold fs-1'>LOG IN</h1>
                    <p className='fw-semibold'>Barangay management system</p>
                </div>
                <form className='d-flex flex-column'>
                    <div class="input-group mb-4">
                        <span class="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faUser}/></span>
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div class="input-group mb-4">
                        <span class="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faLock}/></span>
                        <input type="password" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <button type="button" class="btn btn-primary w-25 align-self-end">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;
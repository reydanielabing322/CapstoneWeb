import React, { useContext, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';
import rr from '../images/Roadready.png';
import '../pages/login.css';
import { FaEnvelope } from 'react-icons/fa'; // Import FaEnvelope icon
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { FaLock } from "react-icons/fa";
import { AuthContext } from '../authentication/AuthContext';



const Login = () => {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const{dispatch} = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                dispatch({type:"LOGIN",payload: user })
                navigate("/managerdb");
            })
            .catch((error) => {
                console.log(error);
                setError(true);
                alert("Wrong Email or Passowrd")
            });
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 col-md-6 d-none d-md-block image-container"> </div>
                     

                <div className="col-lg-6 col-md-6 form-container">
                    <div className="col-lg-8 col-md-12 col-sm-9 col-xs-12 form-box text-center">
                        <div className="logo mb-3">
                            <img src={rr} width="150px" alt="Logo" />
                        </div>
                        <div className="heading mb-4">
                            <h4>Login into your account</h4>
                        </div>
                        <form onSubmit={handleLogin}>
                            <div className="form-input">
                                <span><FaEnvelope /></span> {/* Use FaEnvelope icon */}
                                <input type="text" placeholder="Email Address" onChange={e => setEmail(e.target.value)} required />
                            </div>
                            <div className="form-input">
                                <span><FaLock /></span>
                                <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required />
                            </div>
                            <div className="row mb-3">
                                <div className="col-6 d-flex">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="cb1" />
                                        <label className="custom-control-label text-white" htmlFor="cb1">Remember me</label>
                                    </div>
                                </div>
                                <div className="col-6 text-right" style={{ paddingLeft: '105px' }}> 
                                    <p className='paragraph-1'>Forget Password</p>
                                </div>
                            </div>
                            <div className="text-left mb-3">
                                <button type="submit" className="btn">Login</button>
                            </div>
                            <div className="text-center mb-2">
                                <div className="mb-3" style={{ color: '#777' }}>or login with</div>
                                <a href="" className="btn btn-social btn-google">Google</a>

                            </div>
                            <div style={{ color: '#777' }}>Don't have an account
                                <Link to ="/register" className="register-link">Register here</Link>
                            </div>
                        </form>
                        {error && <span>Wrong Email Or Password!</span>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

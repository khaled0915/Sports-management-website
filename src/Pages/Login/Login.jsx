import { useContext, useState } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';



const Login = () => {


  const [loginSuccess , setLoginSuccess] = useState('');

  const [loginError , setLoginError] = useState('');

  const {signIn} = useContext(AuthContext)

  const location = useLocation();


  const navigate = useNavigate();


  



  





  const handleLogin = e =>{
    e.preventDefault();

    const email = e.target.email.value ;
    const password = e.target.password.value ;

    console.log(email , password);


    setLoginError('');
    setLoginSuccess('');


    // for login 

    if(!password){
      toast.error('Your password doesnt match ')
      return;
    }
    else if(!email){
      toast.error('Your Email doesnt match')
      return;
    }

    

    

    signIn(email ,password)
    .then(result =>{
      console.log(result.user)
      // toast.success('login successfully');
      setLoginSuccess(  toast.success('login successfully'))

      navigate(location?.state? location.state :'/')
      
      
    })
    .catch(error =>{
      console.error(error)
      setLoginError(toast.error(error.message))

      // toast.error(error.message);
      
    })
    

     
  }



  
  
  










    return (

        <>
        <Navbar></Navbar>

<div className="hero min-h-screen bg-base-200">
            

            <div className="hero-content flex-col ">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
          
             
              </div>
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          
                <form onSubmit={handleLogin} className="card-body">
                
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                  </div>
                  <div className="form-control mt-6">

                    <button   className="btn 
                    btn-primary">

<ToastContainer />

                      Login  </button>

                  </div>
                </form>

                
                {
                  loginSuccess && <p> {loginSuccess} </p>
                }


                <p className="font-semibold text-center text-white "> New here ? <Link className="text-bold text-blue-600 ml-3" to='/register'>  Register </Link> </p>



              </div>
            </div>
          </div>
        
        </>




    
    );
};

export default Login;
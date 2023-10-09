import { useContext } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Login = () => {

  const {signIn} = useContext(AuthContext)

  const location = useLocation();


  const navigate = useNavigate();





  const handleLogin = e =>{
    e.preventDefault();

    const email = e.target.email.value ;
    const password = e.target.password.value ;

    console.log(email , password);

    // for login 

    signIn(email ,password)
    .then(result =>{
      console.log(result.user)

      navigate(location?.state? location.state :'/')
    })
    .catch(error =>{
      console.error(error)
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
                    <button className="btn btn-primary">Login</button>
                  </div>
                </form>


                <p className="font-semibold text-center text-white "> New here ? <Link className="text-bold text-blue-600 ml-3" to='/register'>  Register </Link> </p>



              </div>
            </div>
          </div>
        
        </>




    
    );
};

export default Login;
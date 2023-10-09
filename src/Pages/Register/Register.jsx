import { useContext } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";


const Register = () => {

  const {createUser} = useContext(AuthContext);



  const handleRegister = e =>{
    e.preventDefault();

    const email = e.target.email.value ;
    const password = e.target.password.value ;
    const name = e.target.name.value ;

    console.log(email , password, name);

    // createUser 

    createUser(email,password)
    .then(result => {
      console.log(result)
    })
    .catch(error =>{
      console.error(error)
    })
    

     
  }



    return (
        <div>

            <Navbar></Navbar>

<div className="hero min-h-screen bg-base-200">

<div className="hero-content flex-col ">
  <div className="text-center lg:text-left">
    <h1 className="text-5xl font-bold">Register  now!</h1>

 
  </div>
  <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      
    <form onSubmit={handleRegister} className="card-body">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
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
        <button className="btn btn-primary">Register</button>
      </div>
    </form>

    <p className="text-center text-white font-semibold"> Already Registered ? <Link className="text-blue-600 font-bold ml-3" to='/login'>  Login </Link> </p>
  </div>
</div>
</div>
            
        </div>
    );
};

export default Register;
import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

import { FcSportsMode } from 'react-icons/fc';




const Navbar = () => {

  const [User , setUser]= useState(null);


  const {logOut , user , handleGoogleSingIn} = useContext(AuthContext)

  const handleGoogleBtn = (auth , googleProvider) =>{

    handleGoogleSingIn(auth , googleProvider)
    .then(result => {
      const loggedUser = result.user ;
      console.log(loggedUser);
      setUser(loggedUser);

    })
    .catch(error => {
      console.error(error);
    })



  }


  const handleSignOut =() =>{
    logOut()
    .then()
    .catch()

    
  }


    const NavLinks = <>


    <li className="hover:underline hover:text-red-600"> <NavLink to='/'>  Home </NavLink>  </li>
    <li className="hover:underline"> <NavLink to='/about'>  About Us </NavLink>  </li>
    <li className="hover:underline"> <NavLink to='/login'>  Login </NavLink>  </li>
    <li className="hover:underline"> <NavLink to='/register'>  Register </NavLink>  </li>
   
    
    
    </>



    return (




       <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {NavLinks}
      </ul>
    </div>
    <div className="flex ">

    <a className="btn text-amber-500  mr-3 btn-ghost normal-case text-xl"> 
    <FcSportsMode></FcSportsMode>
    SportConnectPro </a>

    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {NavLinks}
    </ul>
  </div>
  <div className="navbar-end flex md:flex-row flex-col gap-10">


    {

      user ? 

      <button onClick={handleSignOut} className="btn btn-accent btn-xs "> signOut </button> 

      : 

      <Link to='/login'>  Login  </Link>

    }


    <button onClick={handleGoogleBtn } className="btn btn-xs btn-success mr-5 ml-5"> Login With Google </button>

    {
      User && 

      


      <div>
        <button onClick={handleGoogleBtn } className="btn btn-xs btn-success hidden  ml-5"> Login With Google </button>
        <h3 className="text-xs font-bold text-red-800 ">
          User : {User.displayName}
           </h3>
           <img className="rounded-full w[60px] h-[50px] mx-auto " src={User.photoURL} alt="" />

      </div>
    }


   


  </div>
</div>
    );
};

export default Navbar;
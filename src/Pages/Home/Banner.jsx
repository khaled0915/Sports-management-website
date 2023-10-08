import { Link } from "react-router-dom";



const Banner = () => {



    return (

<>





<div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/vVKB4Wg/gr-stocks-Iq9-Sa-Jezk-OE-unsplash.jpg)'}}>



            
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">

      <h1 className="mb-5 text-white text-5xl font-bold">

        Sports Event
      </h1>

      <p className=" mb-5 text-[15px] font-normal text-[#FFF]">

      Welcome to Our Website - Your Ultimate Sports Management Solution

      </p>

      <Link to='/login'> <button className="btn btn-outline btn-success">Get In Touch</button> </Link>


    </div>
  </div>
</div>



</>


        
    );
};

export default Banner;


const ServiceDetailInfo = ({service}) => {

    const { name , id, image , price , description , buttonText , detailed_desc } =service ;
    return (
        <div>







            



            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">

    <img src={image} className=" max-w-sm   rounded-lg shadow-2xl" />
    <div>

      <h1 className="text-4xl text-center  font-bold">{name}</h1>

      <p className="py-6 font-semibold text-sm"> {detailed_desc} </p>


      
    </div>

  </div>
</div>



{/* club membership */}
  
<div className="grid mt-10 lg:grid-cols-3 gap-5 md:grid-cols-2 grid-cols-1">

    <div>

        <h1 className="font-bold text-blue-800 font-sans "> CLUB MEMBERSHIP </h1>

        <p className="text-[15px] font-light"> Join our exclusive club membership and unlock a world of sports opportunities. Enjoy access to premium facilities, exclusive events, and special discounts. Whether you're a seasoned athlete or a sports enthusiast, our club membership is your gateway to a vibrant sports community </p>



    </div>

    <div className="card  bg-neutral text-neutral-content">

  <div className="card-body items-center text-center">

    <h2 className="card-title mb-5 text-green-600 "> SILVER PACK  </h2>
    <p className="text-violet-200">Perfect for small business</p>

    <p className="text-red-600"> $ 10/Mon </p>
    <p className="text-blue-400"> Unlimited Projects 
 </p>
    <div className="card-actions justify-end">
    <button className="btn btn-outline btn-primary">Get Now</button>
      
    </div>
  </div>
</div>

    <div className="card  bg-neutral text-neutral-content">
  <div className="card-body items-center text-center">


  <h2 className="card-title mb-5 text-green-600 "> GOLD PACK  </h2>
    <p className="text-violet-200">Perfect for small business</p>

    <p className="text-red-600 font-bold" > {price}/Mon </p>
    <p className="text-blue-400"> Unlimited Projects 
 </p>



    

    

    <div className="card-actions justify-end">

    <button className="btn btn-outline btn-primary">Get Now</button>
     
    </div>
  </div>
</div>



</div>





            
        </div>
    );
};

export default ServiceDetailInfo;
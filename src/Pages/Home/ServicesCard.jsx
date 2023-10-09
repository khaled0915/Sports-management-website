import { Link } from "react-router-dom";


const ServicesCard = ({service}) => {

    const { name , id, image , price , description , buttonText } =service ;
    return (
        <div className="card  bg-base-100 shadow-xl">

<h2 className="card-title font-bold text-xl text-cyan-500 mb-5 mx-auto"> {name} </h2>

                
        <figure><img className="w-[400px] h-[300px] rounded-full" src={image} alt="Shoes" /></figure>

        <div className="card-body">

          

          <p className="text-center">{description}</p>
          <span className="text-xl mx-auto font-semibold text-amber-600"> price :  {price} </span>

          <div className="card-actions mx-auto mt-5 mb-5 ">


          <Link to={`/service/${id}`}> <button className="btn  btn-outline btn-accent"> {buttonText} </button> </Link>
            
          </div>
        </div>
      </div>
    );
};

export default ServicesCard;
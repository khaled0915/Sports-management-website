import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../Home/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import ServiceDetailInfo from "./ServiceDetailInfo";
import { useEffect, useState } from "react";


const ServiceDetail = () => {





    const [ showData , setShowData ] = useState({})


    const {id} = useParams();
    console.log(id);
 
    const params = useParams()
    console.log(params);

    const services = useLoaderData();
    console.log(services);

    useEffect (()=> {

        const MatchData = services.find ( data => data.id ==id  )
        // console.log(MatchData);
        setShowData(MatchData);


    } ,[id , services ]) 
    console.log(showData);









  

    

    
    return (

        <>

<Navbar></Navbar>
         <div>







<div>
   <ServiceDetailInfo service={showData}> </ServiceDetailInfo>
</div>

</div>
        
        <Footer></Footer>
        
        
        </>
       
    );
};

export default ServiceDetail;
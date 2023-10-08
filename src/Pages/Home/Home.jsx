import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Banner from "./Banner";
import ServicesCard from "./ServicesCard";


const Home = () => {

    

    const services = useLoaderData();
    console.log(services);
    return (
        <div>

            <Navbar>

            </Navbar>

            <h2 className="text2xl">this is home</h2>


            <Banner></Banner>



            {/* service section   */}


            <h1 className=" mt-6 mb-5 text-center font-bold text- text-2xl"> Our Services </h1>


            <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1  ">


                {
                    services.map(service => <ServicesCard key={service.id} service={service} > </ServicesCard> )
                }

               

            </div>



            
        



            
        </div>
    );
};

export default Home;
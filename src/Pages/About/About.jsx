import Footer from "../Home/Footer";
import Navbar from "../Shared/Navbar/Navbar";


const About = () => {
    return (
        <div className="max-w-6xl mx-auto">

            <Navbar></Navbar>


<div className="hero bg-pink-600 min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/PQ47GqM/muktasim-azlan-p-Pf-OLOK0oe-I-unsplash.jpg" className="md:max-w-sm w-[300px] rounded-full   mx-auto  shadow-2xl" />
    <div>
      <h1 className="md:text-5xl text-3xl  text-center text-white font-bold">

        WelCome To our WebSite


      </h1>
      <p className="py-6 text-center text-white">we are passionate about bringing the thrill of sports to enthusiasts of all kinds. With a diverse portfolio of sports events that includes chess, badminton, cricket, football, and basketball, we aim to create memorable sporting experiences for athletes and fans alike.</p>
      
    </div>
  </div>


  
</div>



<div className="mt-5 bg-orange-700">
    <h2 className=" text-center text-4xl font-bold text-white mb-10 "> Why Choose Us for Your Sports Events? </h2>


    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">


    <div className="card  bg-base-100 shadow-xl image-full">
  <figure><img src="https://i.ibb.co/Gc1G397/istockphoto-1355687112-170667a.webp" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="mx-auto font-bold hover:text-amber-600 text-orange-600 card-title"> Variety of Sports: </h2>
    <p className="mx-auto hover:text-sky-500 mt-10 font-semibold text-center text-white text-sm">We cater to a wide range of sports, from the 
    <br />
    cerebral challenges of chess to the fast-paced action of basketball. No matter your sporting preference, we have something for you.</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>

    <div className="card  bg-base-100 shadow-xl image-full">
  <figure><img src="https://i.ibb.co/W2XQfzV/event-management-flowchart-concept-260nw-411973459.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="mx-auto hover:text-amber-500 font-bold text-orange-600 card-title">Professional Management</h2>
    <p className="mx-auto hover:text-cyan-600 mt-10 font-semibold text-center text-white text-sm">Our experienced team is dedicated to ensuring that every event is executed seamlessly. From event planning to logistics and execution, we handle it all.</p>
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div>
    <div className="card  bg-base-100 shadow-xl image-full">
  <figure><img src="https://i.ibb.co/KmWdWR4/images-1.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="mx-auto  hover:text-yellow-500  font-extrabold text-white card-title">Fan Engagement:</h2>
    <p className="mx-auto hover:text-cyan-600 text-blue-50 mt-10 font-semibold text-center  text-sm">We understand the importance of passionate fans in any sport. Our events are designed to provide an exhilarating experience for spectators, with opportunities to cheer for their favorite teams and athletes.</p>
    <div className="card-actions justify-end">
    
    </div>
  </div>
</div>

    </div>


   


</div>











<div className="mt-10">

<Footer></Footer>

</div>



           
            
        </div>
    );
};

export default About;

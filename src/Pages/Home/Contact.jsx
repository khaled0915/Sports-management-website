
import { AiFillPhone ,AiOutlineMail } from 'react-icons/Ai';

import { BiMap } from 'react-icons/Bi';

const Contact = () => {
    return (

        <div>


<div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/4FP7C6M/melinda-gimpel-5-Ne6m-MQt-Ido-unsplash.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>

        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold"> Contact with us </h1>
            <p className="mb-5"></p>


            <div className='item-center flex justify-center gap-4'>
            <AiFillPhone className='text-4xl'></AiFillPhone>

            <p> +123-456-7890 </p>
            </div>

            <div className='item-center flex justify-center mt-10 gap-4'>
           <AiOutlineMail className='text-4xl'></AiOutlineMail>

            <p> hello@gmail.com </p>
            </div>

            <div className='item-center flex justify-center mt-10 gap-4'>
          <BiMap className='text-4xl'></BiMap>

            <p> 123 AnyWhere St, Any City </p>
            </div>


            







          </div>
        </div>
      </div>

        </div>

       
    );
};

export default Contact;
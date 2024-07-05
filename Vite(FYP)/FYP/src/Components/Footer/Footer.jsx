import React from 'react'

const Footer = () => {
  return (
    <>
     {/* <footer className="flex flex-wrap bottom-auto bg-orangered w-full h-[60%]">
       <div className='flex flex-wrap gap-3 mt-32'> 
        <div className=" rounded bg-white w-[60px] h-[60px]" />
        <div className=" rounded bg-white w-[60px] h-[60px]" />
        <div className=" rounded bg-white w-[60px] h-[60px]" />
        <div className=" rounded bg-white w-[60px] h-[60px]" />
       </div>
        <img
          className="absolute bottom-32 left-[0px] w-full h-1.5 object-contain bg-white"
          alt=""
        />
        <img
          className="absolute bottom-2 left-[0px] w-full h-1.5 object-contain bg-white"
          alt=""
        />
        <h2 className="absolute bottom-0 left-212 text-white text-5xl font-newsreader text-left">
          2024 © Sir Syed University | All Rights Reserved | Developed by: SSUET
          CE
        </h2>
        <div className="absolute bottom-auto left-[873px] text-5xl font-newsreader text-left inline-block w-[560px] h-[79px]">
          <h2 className="m-5">
            Phone: +92 21 3498-8000 | Email: info@ssuet.edu.pk
          </h2>
          <h2 className="m-5">
            Address: Main University Road, Karachi 75300, Pakistan
          </h2>
        </div>  
        </footer> */}
      
         <footer className=" bg-orangered w-full h-auto">


          <div className='flex flex-wrap justify-between mt-28'>  

          <img
             className="w-full bg-white h-1.5 object-contain mt-20"
             alt=""
           />       
           <div className='flex flex-wrap gap-2 py-2 pl-2'>
            <div className=" rounded bg-white w-[60px] h-[60px]" />
            <div className=" rounded bg-white w-[60px] h-[60px]" />
            <div className=" rounded bg-white w-[60px] h-[60px]" />
            <div className=" rounded bg-white w-[60px] h-[60px]" />
           </div>  
          
           <div className="w-1/3 h-auto pt-3">
                <p className="m-0">
                Phone: +92 21 3498-8000 | Email: info@ssuet.edu.pk
                </p>
                <p className="m-0">
                 Address: Main University Road, Karachi 75300, Pakistan
                 </p>
            </div>
           </div>
           <img
             className="w-full bg-white h-1.5 object-contain mt-0"
             alt=""
           />
              
               <div className="flex flex-wrap justify-center mt-5 py-10">
                <b>2024 © Sir Syed University | All Rights Reserved | Developed by: SSUET
                 CE </b>
               </div>   
        </footer>  

      {/* <footer className="relative bg-orangered w-full h-64">
        <div className="absolute bottom-0 left-14 rounded bg-white w-60 h-10"></div>
        <div className="absolute bottom-0 left-85 rounded bg-white w-60 h-10"></div>
        <div className="absolute bottom-0 left-156 rounded bg-white w-60 h-10"></div>
        <div className="absolute bottom-0 left-27 rounded bg-white w-60 h-10"></div>
        <img
          className="absolute bottom-0 left-0 w-full h-1.5 object-contain"
          alt=""
        />
        <img
          className="absolute bottom-0 left-0 w-full h-1.5 object-contain"
          alt=""
        />
        <h2 className="absolute bottom-0 left-212 text-5xl font-newsreader text-left">
          2024 © Sir Syed University | All Rights Reserved | Developed by: SSUET
          CE
        </h2>
        <div className="absolute bottom-0 left-767 text-5xl font-newsreader text-left inline-block w-560 h-79">
          <p className="m-5">
            Phone: +92 21 3498-8000 | Email: info@ssuet.edu.pk
          </p>
          <p className="m-5">
            Address: Main University Road, Karachi 75300, Pakistan
          </p>
        </div>
      </footer> */}
    </>
  );
};

export default Footer;

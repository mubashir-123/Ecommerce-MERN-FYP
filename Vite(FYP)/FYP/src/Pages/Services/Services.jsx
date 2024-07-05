import { Link } from "react-router-dom";

const Services = () => {
    return (
      <div className="flex flex-wrap bg-slate-100 text-center text-5xl text-black font-newsreader mt-16">
        {/* <div className="flex-wrap absolute top-[0px] left-[0px] w-[1440px] h-[138px] text-mini text-white font-inter">
          <div className="flex-wrap absolute top-[47px] left-[565px] rounded-81xl bg-orangered w-[124px] h-[38px] flex flex-row items-center justify-center py-2.5 px-[25px] box-border">
            <b className="flex-wrap relative">Home</b>
          </div>
          <div className="flex-wrap absolute top-[47px] left-[707px] rounded-81xl bg-orangered w-[124px] h-[38px] flex flex-row items-center justify-center py-2.5 px-[25px] box-border">
            <b className="flex-wrap relative">About us</b>
          </div>
          <div className="flex-wrap absolute top-[47px] left-[849px] rounded-81xl bg-orangered w-[124px] h-[38px] flex flex-row items-center justify-center py-2.5 px-[25px] box-border">
            <b className="flex-wrap relative">Product</b>
          </div>
          <div className="flex-wrap absolute top-[47px] left-[991px] rounded-81xl bg-orangered w-[124px] h-[38px] flex flex-row items-center justify-center py-2.5 px-[25px] box-border">
            <b className="flex-wrap relative">Estimation</b>
          </div>
          <div className="absolute top-[47px] left-[1133px] rounded-81xl bg-orangered w-[124px] h-[38px] flex flex-row items-center justify-center py-2.5 px-[25px] box-border">
            <b className="relative">Services</b>
          </div>
          <div className="absolute top-[47px] left-[1275px] rounded-81xl bg-orangered w-[124px] h-[38px] flex flex-row items-center justify-center py-2.5 px-[25px] box-border">
            <b className="relative">Contact us</b>
          </div>
          <img
            className="absolute top-[0px] left-[43px] w-[146px] h-[114px] object-cover"
            alt=""
            src="/blue-and-yellow-modern-mascot-paint-shop-logo-1@2x.png"
          />
          <img
            className="absolute top-[136px] left-[0px] w-[1440px] h-0.5 object-contain"
            alt=""
          />
        </div> */}

        {/* <div className="absolute top-[5453px] left-[0px] bg-orangered w-[1440px] h-[269px]" />
        <div className="absolute top-[5525px] left-[129px] rounded bg-white w-[60px] h-[60px]" />
        <div className="absolute top-[5525px] left-[200px] rounded bg-white w-[60px] h-[60px]" />
        <div className="absolute top-[5525px] left-[271px] rounded bg-white w-[60px] h-[60px]" />
        <div className="absolute top-[5525px] left-[58px] rounded bg-white w-[60px] h-[60px]" />
        <img
          className="absolute top-[5595px] left-[0px] w-[1440px] h-1.5 object-contain"
          alt=""
        />
        <img
          className="absolute top-[5509px] left-[0px] w-[1440px] h-1.5 object-contain"
          alt=""
        />
        <div className="absolute top-[5530px] left-[873px] text-white text-left inline-block w-[560px] h-[79px]">
          <p className="m-0">
            Phone: +92 21 3498-8000 | Email: info@ssuet.edu.pk
          </p>
          <p className="m-0">
            Address: Main University Road, Karachi 75300, Pakistan
          </p>
        </div>
        <b className="absolute top-[5653px] left-[318px] text-white text-left">
          2024 © Sir Syed University | All Rights Reserved | Developed by: SSUET
          CE
        </b> */}



        <b className="text-77xl text-center w-full mt-10 text-orangered">
          Services
        </b>

      <div className="flex flex-wrap justify-center w-full mt-14">
        <img
          className="w-[1087px] h-[533px] object-cover"
          alt=""
          src="/rectangle-3@2x.png"
        />
      </div>

        <b className="text-29xl text-center w-full mt-10">
          Interiour
        </b>

      <div className="text-13xl font-light px-44">
          <p className="text-center mt-10">
            Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it
            to make a type specimen book.
          </p>
          <p className="mt-10"> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
          <p className="m-10">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
         </div>

         <div className="flex flex-wrap justify-center w-full mt-3">
             <button className="bg-orangered  text-white font-inter w-[202px] h-[46px] py-1.5 items-center box-border rounded-81xl"><Link to='/Contactus'>Contact Us</Link></button>
        </div>




      <div className="flex flex-wrap justify-center w-full mt-14">
        <img
          className="w-[1098px] h-[533px] object-cover"
          alt=""
          src="/rectangle-13@2x.png"
        />
      </div> 

        <b className="text-29xl w-full text-center mt-10">
          Interiour
        </b>
        <div className="text-13xl font-light px-44">
          <p className="mt-10">
            Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it
            to make a type specimen book.
          </p>
          <p className="mt-10">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <p className="m-10">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>

        <div className="flex flex-wrap justify-center w-full mt-3">
           <button className="bg-orangered  text-white font-inter w-[202px] h-[46px] py-1.5 items-center box-border rounded-81xl"><Link to='/Contactus'>Contact Us</Link></button>
        </div>





      <div className="flex flex-wrap justify-center w-full mt-14">
        <img
          className="w-[1098px] h-[533px] object-cover"
          alt=""
          src="/rectangle-14@2x.png"
        />
      </div>  
        <b className="text-29xl w-full text-center mt-10">
          Interiour
        </b>        

        <div className="text-13xl font-light px-44">
          <p className="mt-10">
            Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it
            to make a type specimen book.
          </p>
          <p className="mt-10"> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <p className="m-10">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>

         <div className="flex flex-wrap justify-center w-full mt-3">
           <button className="bg-orangered  text-white font-inter w-[202px] h-[46px] py-1.5 items-center box-border rounded-81xl"><Link to='/Contactus' >Contact Us</Link></button>
        </div>






      <div className="flex flex-wrap justify-center w-full mt-14">
        <img
          className=" w-[1076px] h-[525px] object-cover"
          alt=""
          src="/rectangle-15@2x.png"
        />
      </div>  
        <b className="text-29xl w-full text-center mt-10">
          Interiour
        </b>

        <div className="text-13xl font-light px-44">
          <p className="mt-10">
            Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it
            to make a type specimen book.
          </p>
          <p className="mt-10">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <p className="m-10">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
       
        <div className="flex flex-wrap justify-center w-full mt-3">
            <button className="bg-orangered  text-white font-inter w-[202px] h-[46px] py-1.5 items-center box-border rounded-81xl"><Link to='/Contactus'>Contact Us</Link></button>
        </div>
        
      </div>
    );
  };
  
  export default Services;
  
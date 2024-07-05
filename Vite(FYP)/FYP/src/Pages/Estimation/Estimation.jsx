import React, { useRef, useState } from 'react';


const Estimate = () => {
  // Paint Estimation
  const [paint, setPaint] = useState(0);
  const [paint2, setPaint2] = useState(0);
  const days = useRef(0);
  const [price, setPrice] = useState(0);

  // Calculate Area for Walls
  const widthRef = useRef(null);
  const heightRef = useRef(null);

  const [totalArea, setTotalArea] = useState(0);

  const calculateArea = () => {
    const width = parseFloat(widthRef.current.value);
    const height = parseFloat(heightRef.current.value);

    const area = width * height;

    setTotalArea(area);

    let paintest = Math.round(area/(16 * 10.764) * 1000)/1000;
   
    setPaint(paintest);


    // setDaysValue(days.current.value * 1500);

  }
  // Calculate Area for Doors and windows
  const width = useRef(null);
  const height = useRef(null);

  const [totalArea2, setTotalArea2] = useState(0);

  const calculateArea2 = () => {
    const Width = parseFloat(width.current.value);
    const Height = parseFloat(height.current.value);

    const area = Width * Height;

    setTotalArea2(area);

    let est = area / 80;
    setPaint2(est);
  }

  return (
    <div className=" bg-white text-45xl text-white font-newsreader">
      {/* <div className="absolute top-[1210px] left-[0px] w-[1440px] h-[269px] text-5xl">
          <div className="absolute top-[0px] left-[0px] bg-orangered w-[1440px] h-[269px]" />
          <div className="absolute top-[72px] left-[129px] rounded bg-white w-[60px] h-[60px]" />
          <div className="absolute top-[72px] left-[200px] rounded bg-white w-[60px] h-[60px]" />
          <div className="absolute top-[72px] left-[271px] rounded bg-white w-[60px] h-[60px]" />
          <div className="absolute top-[72px] left-[58px] rounded bg-white w-[60px] h-[60px]" />
          <img
            className="absolute top-[142px] left-[0px] w-[1440px] h-1.5 object-contain"
            alt=""
          />
          <img
            className="absolute top-[56px] left-[0px] w-[1440px] h-1.5 object-contain"
            alt=""
          />
          <b className="absolute top-[200px] left-[318px]">
            2024 © Sir Syed University | All Rights Reserved | Developed by:
            SSUET CE
          </b>
          <div className="absolute top-[77px] left-[873px] inline-block w-[560px] h-[79px]">
            <p className="m-0">
              Phone: +92 21 3498-8000 | Email: info@ssuet.edu.pk
            </p>
            <p className="m-0">
              Address: Main University Road, Karachi 75300, Pakistan
            </p>
          </div>
        </div> */}


      <div className="flex flex-wrap justify-center mt-10">
        <b className="text-77xl text-orangered">
          Estimation
        </b>
      </div>

      <div className="flex flex-wrap justify-center w-full h-auto text-5xl mt-10">
        <div className="rounded-[37px] bg-orangered w-[961px] h-[770px] flex pl-10 flex-wrap">
          <div className='flex flex-wrap mt-10'>

            <div>
              <label htmlFor="width" className='mt-1'>Width: </label>
              <input className='text-black rounded-2xl w-32 h-10 text-center pt-0.5 ml-2' type="text" id="width" ref={widthRef} />

              <label htmlFor="height" className='mt-1 ml-8'>Height: </label>
              <input className='text-black rounded-2xl w-32 h-10 text-center pt-0.5 ml-2' type="text" id="height" ref={heightRef} />
              
              <label htmlFor="total area" className='mt-10 ml-8'>Total Area: </label>
              <span className='text-black rounded-xl w-32 h-10 bg-white text-center mt-10 py-1 px-5 ml-2'> {totalArea > 0 ? totalArea - totalArea2 : totalArea} sq feet</span>

                <div className='mt-10'>
                <label htmlFor="total area" className='mt-10 text-white'>Paint Estimate: </label>
                <span id='paintest' className='text-black rounded-xl w-32 h-12 bg-white text-center ml-2 mt-10 py-1 px-5'>{paint > 0 ? paint - paint2 : paint} Liters</span>
                </div>
                  
                <div className='mt-10'>
                <label className='mt-10 text-white'>Price: </label>
                <span className='text-black rounded-xl w-32 h-12 bg-white text-center ml-2 mt-10 py-1.5 px-5'>{price}</span>
                </div>

              <div>
                <button className='bg-white w-24 h-9 text-center text-orangered ml-8 mt-10' onClick={calculateArea}>Ans</button>
              </div>

            </div>
          </div>

          <div className='w-[100%]'>
            <label htmlFor="width" className=' mt-1 ml-4 text-white'>Width:</label>
            <input className='text-black rounded-2xl w-32 h-10 text-center pt-0.5 ml-2' type="text" id="Width" ref={width} />

            <label htmlFor="height" className=' text-white mt-1 pl-28'>Height:</label>
            <input className='text-black rounded-2xl w-32 h-10 text-center pt-0.5 ml-2' type="text" id="Height" ref={height} />

            <div className='flex flex-wrap'>
              <label htmlFor="total area" className='text-white mt-10 pl-4'>Total Area</label>
              <div className='text-black rounded-2xl w-32 h-10 bg-white text-center pt-1 ml-2 mt-10'> {totalArea2} sq feet</div>

              <label htmlFor="total area" className='mt-10 text-white pl-10'>Paint Estimate</label>
              <div className='text-black rounded-2xl w-32 h-10 bg-white text-center pt-1 ml-2 mt-10'>{paint2} Liters</div>
            </div>

            <div>
              <button className='bg-white w-24 h-9 text-center text-orangered ml-8 mt-10' onClick={calculateArea2}>Ans</button>
            </div>

            {/* <label htmlFor="total area" className='mt-8'>Days: </label>
            <input className='text-black rounded-2xl w-32 h-10 text-center mt-8' ref={days} type='number' /> */}

          </div>

        </div>
      </div>


      {/* <div className="absolute top-[14px] left-[0px] w-[1440px] h-[138px] text-center text-mini font-inter">
          <div className="absolute top-[47px] left-[565px] rounded-81xl bg-orangered w-[124px] h-[38px] flex flex-row items-center justify-center py-2.5 px-[25px] box-border">
            <b className="relative">Home</b>
          </div>
          <div className="absolute top-[47px] left-[707px] rounded-81xl bg-orangered w-[124px] h-[38px] flex flex-row items-center justify-center py-2.5 px-[25px] box-border">
            <b className="relative">About us</b>
          </div>
          <div className="absolute top-[47px] left-[849px] rounded-81xl bg-orangered w-[124px] h-[38px] flex flex-row items-center justify-center py-2.5 px-[25px] box-border">
            <b className="relative">Product</b>
          </div>
          <div className="absolute top-[47px] left-[991px] rounded-81xl bg-orangered w-[124px] h-[38px] flex flex-row items-center justify-center py-2.5 px-[25px] box-border">
            <b className="relative">Estimation</b>
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
    </div>
  );
};

export default Estimate;



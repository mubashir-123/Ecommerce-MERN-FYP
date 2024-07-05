import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="bg-orangered mt-5 h-1"></div>
      <div className="flex flex-col flex-wrap justify-center text-center mt-1 bg-cover bg-center h-[70vh]" style={{ backgroundImage: 'url("/image-1@2x.png")' }}>


        <div>

          <div className="flex flex-wrap relative top-16">
            <img className="w-40 h-40 object-cover lg:ml-[46%] sm:ml-[40%]" src="/public/file.png" alt="" />
          </div>

          <div className=" bg-white shadow-md ml-[30%] text-center text-wrap w-[45%] h-[45%] pt-16">

            <h2 className="text-13xl font-bold">Professional Painting Solutions</h2>
            <p className="text-lg">Serving Greater Montreal & Surrounding Areas.</p>

          </div>
        </div>
      </div>

      <div className='flex flex-wrap flex-col items-center mt-16'>

        <div className='mb-7'>
          <b className="text-29xl text-orangered">Services</b>
        </div>

        <div className="text-center text-wrap w-[80%]">
          <p className="">
            Walls Painting offers a highly professional approach to both
            residential and commercial painting projects.With extensive experience
            working with diverse paints and materials, coupled with a keen
            comprehension of client preferences and needs, we assure the
            fulfillment of every project with utmost satisfaction.
          </p>
          <p className="">
            <b>Book your free estimate for your next project with us!</b>
          </p>
        </div>

      </div>



      <div className=" bg-gainsboro flex flex-wrap justify-evenly w-full h-auto mt-20 mb-10 pb-14">
        <div className="mt-8">
          <img
            className=" w-[260px] h-[260px] object-cover"
            alt=""
            src="/rectangle-3@2x.png"
          />
          <b className="bg-orangered rounded-81xl px-8 py-2.5 text-wrap text-center ml-[27%] text-white">Interior</b>
        </div>


        <div className="mt-8">
          <img
            className=" w-[260px] h-[260px] object-cover"
            alt=""
            src="/rectangle-4@2x.png"
          />

          <b className="bg-orangered rounded-81xl px-8 py-2.5 text-wrap text-center ml-[27%] text-white">Exterior</b>
        </div>

        <div className="mt-8">
          <img
            className=" w-[260px] h-[260px] object-cover"
            alt=""
            src="/rectangle-5@2x.png"
          />
          <b className="bg-orangered rounded-81xl px-8 py-2.5 text-wrap text-center ml-[27%] text-white">Patches</b>
        </div>

        <div className="mt-8">
          <img
            className=" w-[260px] h-[260px] object-cover"
            alt=""
            src="/rectangle-6@2x.png"
          />
          <b className="bg-orangered rounded-81xl px-8 py-2.5 text-wrap text-center ml-[27%] text-white">Wood Stain</b>
        </div>

      </div>



      <div className="lg:flex lg:flex-row-reverse lg:flex-wrap mt-48 md:flex md:flex-col md:items-center      sm:flex sm:flex-col sm:items-center">

        <div className="md:flex md:flex-wrap md:relative md:right-10 sm:justify-center">
          <img
            className=" rounded-[26px] w-[704px] h-[1200px] object-cover"
            alt=""
            src="/rectangle-8@2x.png"
          />
        </div>

        <div className="md:flex md:flex-wrap rounded-[29px] p-8 md:relative md:left-10 bg-white shadow-[0px_4px_22.9px_rgba(193,_193,_193,_0.25)] w-[418px] h-[964px]" >
          <div className="text-black text-left inline-block w-[360px] h-[412px] text-base font-newsreader">

            <div className="text-wrap text-45xl font-itim text-orangered text-left inline-block w-[337px]">
              Why Choose The Walls?
            </div>

            <p className="m-0 text-5xl font-light">
              The majority of our new projects stem directly from our previous
              endeavors, often through referrals. Our business foundation thrives on
              delivering dependable and swift services.
            </p>
            <p className="m-0">
              <span>
                <span>&nbsp;</span>
              </span>
            </p>
            <p className="m-0">
              <span>
                <span>&nbsp;</span>
              </span>
            </p>
            <p className="m-0">
              <span>
                <span>&nbsp;</span>
              </span>
            </p>
            <p className="m-0">
              <span>
                <span className="font-extrabold">
                  Our Commitment to Service Excellence
                </span>
              </span>
            </p>
            <p className="m-0">
              <span>
                <span className="font-extrabold">&nbsp;</span>
              </span>
            </p>
            <ul className="m-0 pl-[21px]">
              <li className="mb-0">
                <span>
                  <span>Dedicated Project Manager</span>
                </span>
              </li>
              <li className="mb-0">
                <span>
                  <span>FREE Project Estimates</span>
                </span>
              </li>
              <li className="mb-0">
                <span>
                  <span>Punctuality as a standard across our teams</span>
                </span>
              </li>
              <li className="mb-0">
                <span>
                  <span>Expertly Trained Team</span>
                </span>
              </li>
              <li className="mb-0">
                <span>
                  <span>Thorough Preparation for Excellent Results</span>
                </span>
              </li>
              <li className="mb-0">
                <span>
                  <span>Exclusive Use of Premium-Quality Materials</span>
                </span>
              </li>
              <li className="mb-0">
                <span>
                  <span>Efficient Project Completion</span>
                </span>
              </li>
              <li className="mb-0">
                <span>
                  <span>Our Workmanship Comes with a Guarantee</span>
                </span>
              </li>
            </ul>
            <p className="m-0">
              <span>
                <span>&nbsp;</span>
              </span>
            </p>
            <p className="m-0">
              <span>
                <span>&nbsp;</span>
              </span>
            </p>
            <p className="m-0">
              <span>
                <span className="font-extrabold">
                  Our job is not finished until you are satisfied.
                </span>
              </span>
            </p>
          <div className="flex flex-wrap justify-center items-center px-5 ml-28 mt-10 rounded-81xl bg-orangered w-[124px] h-[38px]">
            <button className="text-white text-wrap"><Link to='/Contactus'>Contact Us</Link></button>
          </div>

          </div>

        </div>
      </div>

    </div>
  );
};

export default Home;

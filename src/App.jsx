import { IoIosArrowDown } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="text-2xl text-[#CECECE]   w-fit rounded-full p-2 border-2 cursor-pointer transition-all hover:bg-brand_clr hover:border-brand_clr hover:text-white absolute bottom-[-90px] right-[42%]"
      onClick={onClick}
    >
      <HiOutlineArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="text-2xl text-[#CECECE]   w-fit rounded-full p-2 border-2 cursor-pointer transition-all hover:bg-brand_clr hover:border-brand_clr hover:text-white absolute bottom-[-90px] left-[42%]"
      onClick={onClick}
    >
      <HiOutlineArrowLeft />
    </div>
  );
}

function App() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div>
        <ul className=" flex gap-2 absolute bottom-[-75px] left-1/2 -translate-x-1/2  innovate_dots">
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className=" text-[0] w-3 h-3 bg-[#DBDBDB] rounded-full cursor-pointer">
        {i + 1}
      </div>
    ),
  };
  return (
    <>
      {/*==========================
            Menu part start
      ========================= */}

      <nav className=" absolute top-0 left-0 w-full py-7">
        <div className=" container flex justify-between items-center">
          <div>
            <img src="/logo.png" alt="" />
          </div>

          <div>
            <ul className=" flex gap-12 text-lg font-semibold font-menu text-white ">
              <li>
                <a className="flex gap-2 items-center">
                  Home <IoIosArrowDown />
                </a>
              </li>
              <li>
                <a className="flex gap-2 items-center">
                  About <IoIosArrowDown />
                </a>
              </li>
              <li>
                <a className="flex gap-2 items-center">
                  Service <IoIosArrowDown />
                </a>
              </li>
              <li>
                <a className="flex gap-2 items-center">
                  Pages <IoIosArrowDown />
                </a>
              </li>
              <li>
                <a>News</a>
              </li>
            </ul>
          </div>
          <div className=" flex gap-9 text-xl font-primary font-semibold text-white">
            <button>Login</button>
            <button className=" text-primary_clr bg-white py-4 px-7 rounded-md ">
              Free Consultation
            </button>
          </div>
        </div>
      </nav>

      {/*==========================
            Menu part end
      ========================= */}

      {/*==========================
            Banner part start
      ========================= */}
      <section className=" pt-48 bg-[url('/banner.png')] bg-no-repeat bg-cover bg-center">
        <div className=" container relative flex items-end">
          <div className=" w-[60%]">
            <h1 className=" text-6xl font-semibold font-primary text-white leading-[78px] ">
              We Provide Premium Consulting Service For your Business
            </h1>
            <p className=" font-normal  text-lg leading-8 text-white  pt-6 pb-10  font-secondary w-[60%]">
              The Premium Consulting Service provides a faster way to process
              plans, register dealings and create titles.
            </p>
            <button className=" px-7 py-4 text-white font-primary bg-brand_clr rounded-md">
              Get Started Now
            </button>

            <p className=" text-xl leading-8 font-normal font-secondary text-white pt-12 pb-16">
              Already member of our communty?
              <a className=" font-bold text-[#52C5B6]"> Sign in</a>
            </p>

            <div className=" pb-24 flex">
              <div>
                <img
                  src="/test.png"
                  alt=""
                  className=" border-4 rounded-full text-white border-white w-14 absolute  bottom-[98px]"
                />
                <img
                  src="/test_two.png"
                  alt=""
                  className=" border-4 rounded-full text-white border-white absolute bottom-[98px] left-[40px] w-14"
                />
                <img
                  src="/test_three.png"
                  alt=""
                  className=" border-4 rounded-full text-white border-white absolute  bottom-[98px] left-[80px] w-14"
                />
                <img
                  src="/test_four.png"
                  alt=""
                  className=" border-4 rounded-full text-white border-white absolute bottom-[98px] left-[120px]  w-14"
                />
              </div>

              <div>
                <div className="flex items-center pl-52 relative after:absolute after:bg-[#4D516F] after:w-[2px] after:h-5 after:top-1/2 after:-translate-y-1/2 after:left-[70%]">
                  <p className=" font-bold text-3xl font-secondary text-[#52C5B6]">
                    4.5
                  </p>

                  <ul className=" text-[#FDB400] text-xl flex pl-10">
                    <li>
                      <AiFillStar />
                    </li>
                    <li>
                      <AiFillStar />
                    </li>
                    <li>
                      <AiFillStar />
                    </li>
                    <li>
                      <AiFillStar />
                    </li>
                    <li>
                      <AiFillStar />
                    </li>
                  </ul>
                </div>
                <div className=" pl-52 text-lg font-secondary font-medium text-white">
                  <p>305k Total Review</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img className=" translate-x-[20%]" src="/banner_img.png" alt="" />
          </div>
        </div>
      </section>
      {/*==========================
            Banner part end
      ========================= */}

      {/*==========================
            About Us part start
      ========================= */}

      <section className=" my-40">
        <div className=" container flex">
          <div className=" w-[60%] relative">
            <img src="/shape_one.png" alt="" className=" pt-6 pl-6 z-10" />
            <img
              src="/shape_dot.png"
              alt=""
              className=" absolute top-0 left-0 -z-10"
            />
          </div>
          <div className=" w-[40%]">
            <h4 className=" text-xl font-semibold font-primary text-brand_clr">
              ABOUT US
            </h4>
            <h2 className=" title pt-2 pb-5">
              Welcome to World Best Business Company
            </h2>
            <p className=" basic w-3/4">
              We partner with experienced and qualified Accountants, Financial
              Advisors and Chartered Secretaries to provide
            </p>
            <ul className=" pt-6 pb-10">
              <li className=" flex items-center gap-3 text-primary_clr text-lg leading-8 font-normal font-secondary">
                <span className=" bg-[#52C5B6] rounded-full p-1">
                  <BsCheckLg />{" "}
                </span>
                Monthly assesment report
              </li>
              <li className=" flex items-center gap-3 text-primary_clr text-lg leading-8 font-normal font-secondary py-5">
                <span className=" bg-[#52C5B6] rounded-full p-1">
                  <BsCheckLg />{" "}
                </span>
                Tax planning consultation
              </li>
              <li className=" flex items-center gap-3 text-primary_clr text-lg leading-8 font-normal font-secondary">
                <span className=" bg-[#52C5B6] rounded-full p-1">
                  <BsCheckLg />
                </span>
                Montly rent problem solution
              </li>
            </ul>
            <button className=" px-7 py-4 text-white font-primary bg-brand_clr rounded-md">
              Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/*==========================
            About Us part end
      ========================= */}

      {/*==========================
            Services part start
      ========================= */}

      <section className="bg-[#FAFAFA]">
        <div className=" container  pt-28 pb-48">
          <h4 className=" text-xl font-semibold font-primary text-brand_clr">
            Services
          </h4>
          <div className=" flex justify-between mb-12">
            <h2 className=" title w-[30%]">Find the service we provide</h2>
            <p className=" basic w-[35%]">
              Our consultants have years of experience on the in success.
              ​Through the provision of our services.
            </p>
          </div>

          {/* ===========Slider========== */}

          <Slider {...settings}>
            {/* -------Slider_01------ */}
            <div>
              <div className=" service">
                <div className=" relative">
                  <div className=" animate-spin bg-[#F44C4C] w-24 h-24  rounded-full m-auto relative">
                    <span className="  w-[128%] h-[128%] border-2 border-[#F44C4C] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 after:absolute after:w-3 after:h-3 after:bg-[#F44C4C] after:rounded-full after:top-[-6px] after:left-1/2"></span>
                  </div>
                  <img
                    src="/serviceIcon_one.png"
                    alt=""
                    className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>

                <div className=" text-center">
                  <h4 className=" text-xl leading-7 font-semibold font-primary text-primary_clr pt-7 pb-4">
                    Grow Your Brand And Business
                  </h4>
                  <p className=" text-base leading-6 font-normal text-secondary_clr">
                    That community can of course lend to sales - that's how
                    brand and business go hand-in-hand
                  </p>
                </div>
              </div>
            </div>
            {/* -------Slider_02------ */}
            <div>
              <div className=" service">
                <div className=" relative">
                  <div className=" animate-spin bg-[#52C5B6] w-24 h-24  rounded-full m-auto relative">
                    <span className="  w-[128%] h-[128%] border-2 border-[#52C5B6] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 after:absolute after:w-3 after:h-3 after:bg-[#52C5B6] after:rounded-full after:top-[-6px] after:left-1/2"></span>
                  </div>
                  <img
                    src="/serviceIcon_two.png"
                    alt=""
                    className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>

                <div className=" text-center">
                  <h4 className=" text-xl leading-7 font-semibold font-primary text-primary_clr pt-7 pb-4">
                    Increase Your Conversion Rate
                  </h4>
                  <p className=" text-base leading-6 font-normal text-secondary_clr">
                    There are two ways to increase your conversion rate:
                    increase their motivation and make it easier
                  </p>
                </div>
              </div>
            </div>
            {/* -------Slider_03------ */}
            <div>
              <div className=" service">
                <div className=" relative">
                  <div className=" animate-spin bg-[#2BCCFF] w-24 h-24  rounded-full m-auto relative">
                    <span className="  w-[128%] h-[128%] border-2 border-[#2BCCFF] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 after:absolute after:w-3 after:h-3 after:bg-[#2BCCFF] after:rounded-full after:top-[-6px] after:left-1/2"></span>
                  </div>
                  <img
                    src="/serviceIcon_three.png"
                    alt=""
                    className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>

                <div className=" text-center">
                  <h4 className=" text-xl leading-7 font-semibold font-primary text-primary_clr pt-7 pb-4">
                    Grow Your Brand And Business
                  </h4>
                  <p className=" text-base leading-6 font-normal text-secondary_clr">
                    That community can of course lend to sales - that's how
                    brand and business go hand-in-hand
                  </p>
                </div>
              </div>
            </div>
            {/* -------Slider_04------ */}
            <div>
              <div className=" service">
                <div className=" relative">
                  <div className=" animate-spin bg-[#2BCCFF] w-24 h-24  rounded-full m-auto relative">
                    <span className="  w-[128%] h-[128%] border-2 border-[#2BCCFF] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 after:absolute after:w-3 after:h-3 after:bg-[#2BCCFF] after:rounded-full after:top-[-6px] after:left-1/2"></span>
                  </div>
                  <img
                    src="/serviceIcon_three.png"
                    alt=""
                    className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>

                <div className=" text-center">
                  <h4 className=" text-xl leading-7 font-semibold font-primary text-primary_clr pt-7 pb-4">
                    Grow Your Brand And Business
                  </h4>
                  <p className=" text-base leading-6 font-normal text-secondary_clr">
                    That community can of course lend to sales - that's how
                    brand and business go hand-in-hand
                  </p>
                </div>
              </div>
            </div>
            {/* -------Slider_05------ */}
            <div>
              <div className=" service">
                <div className=" relative">
                  <div className=" animate-spin bg-[#2BCCFF] w-24 h-24  rounded-full m-auto relative">
                    <span className="  w-[128%] h-[128%] border-2 border-[#2BCCFF] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 after:absolute after:w-3 after:h-3 after:bg-[#2BCCFF] after:rounded-full after:top-[-6px] after:left-1/2"></span>
                  </div>
                  <img
                    src="/serviceIcon_three.png"
                    alt=""
                    className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>

                <div className=" text-center">
                  <h4 className=" text-xl leading-7 font-semibold font-primary text-primary_clr pt-7 pb-4">
                    Grow Your Brand And Business
                  </h4>
                  <p className=" text-base leading-6 font-normal text-secondary_clr">
                    That community can of course lend to sales - that's how
                    brand and business go hand-in-hand
                  </p>
                </div>
              </div>
            </div>
          </Slider>
          {/* ===========Slider========== */}
        </div>
      </section>

      {/*==========================
            Services part end
      ========================= */}

      {/*==========================
            Solution part start
      ========================= */}

      <section>
        <div className=" container my-40 flex">
          <div className=" w-[50%]">
            <h2 className=" title w-[70%]">
              Best Reliable Solution For Your Business
            </h2>
            <p className=" basic w-[65%] pt-5 pb-10">
              We help our clients succeed by creating brand identities, digital
              experiences, and print materials that communicate clearly, achieve
              marketing.
            </p>
            <button className=" px-7 py-4 text-white font-primary bg-brand_clr rounded-md">
              Get Started Now
            </button>
            <div className=" flex">
              <div className=" ">
                <h3 className=" text-2xl font-primary font-semibold leading-8 text-primary_clr  w-[70%] pt-20 pb-4">
                  First-class investment solutions
                </h3>
                <p className=" text-base leading-7 font-normal font-secondary text-secondary_clr w-[70%]">
                  We can help you with your business strategy, architecture,
                  mapping, and optimisation.
                </p>
              </div>
              <div>
                <h3 className=" text-2xl font-primary font-semibold leading-8 text-primary_clr w-[70%] pt-20 pb-4">
                  Building <br /> the idea of future
                </h3>
                <p className=" text-base leading-7 font-normal font-secondary text-secondary_clr w-[70%]">
                  Offering Performance Driven Partnerships CIBA Specializes In
                  Business Process Outsourcing.
                </p>
              </div>
            </div>
          </div>
          <div className=" w-[50%] relative">
            <img src="/shape_two.png" alt="" className=" w-full z-10" />
            <img
              src="/shape_dot.png"
              alt=""
              className=" absolute bottom-14 right-12 -z-10"
            />
            <div className=" absolute  right-[15%] bottom-0">
              <div className=" flex items-center gap-3 bg-[#52C5B6] w-fit px-6 py-5 relative">
                <h3 className=" text-7xl font-bold font-primary text-white">
                  24
                </h3>
                <p className="  font-semibold font-primary leading-9 text-white text-2xl w-[27%]">
                  Years Experience
                </p>
                <div className=" absolute bg-white top-10   h-1 rounded-full w-32 left-52"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*==========================
            Solution part end
      ========================= */}
      {/*==========================
            Menu part start
      ========================= */}
      {/*==========================
            Menu part end
      ========================= */}
    </>
  );
}

export default App;

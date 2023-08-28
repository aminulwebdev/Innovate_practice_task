import { IoIosArrowDown } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";

function App() {
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
            Menu part start
      ========================= */}
      {/*==========================
            Menu part end
      ========================= */}
      {/*==========================
            Menu part start
      ========================= */}
      {/*==========================
            Menu part end
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


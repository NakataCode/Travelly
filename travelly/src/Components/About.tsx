import KUTE from "kute.js";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    const tween = KUTE.fromTo(
      "#LeftTopOne",
      { path: "#LeftTopOne" },
      { path: "#LeftTopTwo" },
      { repeat: 999, duration: 3000, yoyo: true }
    );
    tween.start();

    const tween2 = KUTE.fromTo(
      "#RightBottomOne",
      { path: "#RightBottomOne" },
      { path: "#RightBottomTwo" },
      { repeat: 999, duration: 3000, yoyo: true }
    );
    tween2.start();

    const tween3 = KUTE.fromTo(
      "#RightTopOne",
      { path: "#RightTopOne" },
      { path: "#RightTopTwo" },
      { repeat: 999, duration: 3000, yoyo: true }
    );
    tween3.start();

    const tween4 = KUTE.fromTo(
      "#LeftBottomOne",
      { path: "#LeftBottomOne" },
      { path: "#LeftBottomTwo" },
      { repeat: 999, duration: 3000, yoyo: true }
    );
    tween4.start();

    return () => {
      tween.stop();
      tween2.stop();
      tween3.stop();
      tween4.stop();
    };
  }, []);
  return (
    <div className=" bg-center  bg-cover bg-no-repeat relative">
      <div className="absolute inset-0 z-[-1]">
        <svg
          id="visual"
          viewBox="0 0 900 600"
          width="1100"
          height="800"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <g transform="translate(-19.472295183664627 -5.512951531722109)">
            <path
              id="LeftTopOne"
              d="M95 -162.3C115 -134.9 117.5 -94.9 146.6 -58.8C175.7 -22.8 231.4 9.2 244 46.6C256.6 84.1 226.2 126.8 190.2 160.4C154.3 194 112.8 218.4 67.7 232.5C22.6 246.6 -26 250.4 -52.1 222.2C-78.1 194.1 -81.6 133.9 -101 96.1C-120.4 58.3 -155.7 42.9 -178.5 13.7C-201.3 -15.5 -211.6 -58.4 -206.8 -105.1C-202 -151.7 -182.1 -202 -145.1 -221.6C-108.1 -241.3 -54.1 -230.1 -8.3 -217.2C37.5 -204.3 75 -189.7 95 -162.3"
              fill="none"
              stroke="#1a78eb"
              strokeWidth="6"
            ></path>
          </g>
          <g
            transform="translate(-22.222720654191576 21.37149907751494)"
            className="hidden"
          >
            <path
              id="LeftTopTwo"
              d="M148.2 -231.3C191.6 -202.8 225.9 -160.8 245.4 -113.4C264.8 -66.1 269.5 -13.3 248.8 26.1C228.1 65.6 182.1 91.7 150 131.4C117.8 171 99.6 224.2 71.7 222.5C43.7 220.8 6 164.4 -23.9 132.4C-53.9 100.3 -76.1 92.7 -90.7 77.6C-105.4 62.5 -112.6 39.9 -141.7 4.9C-170.8 -30.1 -221.8 -77.3 -217.6 -104.6C-213.3 -131.9 -153.7 -139.1 -108.2 -166.7C-62.7 -194.3 -31.4 -242.1 10.5 -258.5C52.4 -274.9 104.9 -259.9 148.2 -231.3"
              fill="none"
              stroke="#1a78eb"
              strokeWidth="6"
            ></path>
          </g>
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 z-[-1]">
        <svg
          id="visual"
          viewBox="0 0 900 600"
          width="1100"
          height="800"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <g transform="translate(876.6479015278536 643.38396864371)">
            <path
              id="RightBottomOne"
              d="M131.6 -188.9C150.3 -167.5 131.2 -102 145.5 -49.3C159.8 3.3 207.3 43.1 198.1 62.2C188.9 81.4 123 79.9 80.5 85C38 90 19 101.5 -6 109.7C-31 117.9 -61.9 122.9 -73.8 107.9C-85.7 92.9 -78.5 58.1 -85.9 29.3C-93.2 0.6 -115.1 -21.9 -132.6 -66.3C-150.1 -110.6 -163.2 -176.6 -140.4 -196.7C-117.6 -216.8 -58.8 -190.9 -1.2 -189.3C56.4 -187.7 112.9 -210.3 131.6 -188.9"
              fill="none"
              stroke="#1a78eb"
              strokeWidth="6"
            ></path>
          </g>
          <g
            transform="translate(913.8671895195504 588.8537970310292)"
            className="hidden"
          >
            <path
              id="RightBottomTwo"
              d="M107.1 -156.1C119 -138.8 95.2 -81 92.1 -41.5C89.1 -2 106.8 19.3 124.3 63.6C141.8 107.9 159.1 175.3 138.3 183.7C117.6 192.1 58.8 141.6 2 138.9C-54.9 136.2 -109.7 181.3 -136.5 174.9C-163.3 168.4 -162 110.3 -166.4 62.2C-170.9 14.1 -181 -24 -171.8 -56.8C-162.5 -89.7 -133.9 -117.2 -102 -128.1C-70.1 -138.9 -35.1 -132.9 6.3 -141.6C47.6 -150.2 95.2 -173.4 107.1 -156.1"
              fill="none"
              stroke="#1a78eb"
              strokeWidth="6"
            ></path>
          </g>
        </svg>
      </div>
      <div className="absolute top-0 right-0 z-[-1]">
        <svg
          id="visual"
          viewBox="0 0 900 600"
          width="1100"
          height="800"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <g transform="translate(915.52748264293 -68.09694954122781)">
            <path
              id="RightTopOne"
              d="M90.2 -96.6C128.2 -96.5 178.2 -85.3 193.1 -58.3C208 -31.3 187.7 11.5 158.9 36.7C130.2 61.9 93 69.4 65.1 110.3C37.2 151.2 18.6 225.6 -10.2 239.6C-39 253.7 -78 207.3 -123.3 172.1C-168.6 136.8 -220.3 112.6 -228.1 76.9C-235.9 41.2 -199.7 -6 -169.7 -41.7C-139.6 -77.5 -115.7 -101.9 -88.4 -105.5C-61.1 -109.1 -30.6 -92.1 -2.3 -89C26.1 -85.9 52.1 -96.7 90.2 -96.6"
              fill="none"
              stroke="#1a78eb"
              strokeWidth="6"
            ></path>
          </g>
          <g
            transform="translate(926.215723482928 12.214033101613893)"
            className="hidden"
          >
            <path
              id="RightTopTwo"
              d="M97.7 -144.1C109.6 -125.8 90.5 -74.5 116.1 -29.7C141.7 15.1 212.1 53.5 210.9 72C209.7 90.6 136.9 89.4 89.8 104.1C42.7 118.8 21.4 149.4 1.8 147C-17.8 144.5 -35.7 109.1 -77 92.5C-118.4 76 -183.3 78.3 -222 50.6C-260.6 22.9 -273 -34.9 -255.7 -81.5C-238.4 -128.1 -191.5 -163.6 -143.9 -170.3C-96.4 -177 -48.2 -155 -2.6 -151.4C42.9 -147.7 85.8 -162.4 97.7 -144.1"
              fill="none"
              stroke="#1a78eb"
              strokeWidth="6"
            ></path>
          </g>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          id="visual"
          viewBox="0 0 900 600"
          width="1100"
          height="800"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <g transform="translate(-59.38573634089957 579.4646106516072)">
            <path
              id="LeftBottomOne"
              d="M154.8 -200.5C196.3 -182.9 222.7 -131.9 236.1 -79.4C249.5 -26.9 249.8 27.2 229 69.1C208.1 111.1 166.1 140.9 124.4 177.3C82.7 213.8 41.3 256.9 6.5 248C-28.4 239.1 -56.8 178.2 -68.7 132.1C-80.6 85.9 -76 54.6 -87.8 26.6C-99.6 -1.4 -127.8 -26.1 -126.7 -44.9C-125.7 -63.7 -95.5 -76.8 -69.5 -99.5C-43.5 -122.2 -21.7 -154.6 17.4 -178.6C56.6 -202.6 113.2 -218.2 154.8 -200.5"
              fill="none"
              stroke="#1a78eb"
              strokeWidth="6"
            ></path>
          </g>
          <g
            transform="translate(12.795354014083046 664.5645041739449)"
            className="hidden"
          >
            <path
              id="LeftBottomTwo"
              d="M72.7 -120.4C100.8 -79.7 134.6 -67.2 163 -39C191.5 -10.7 214.6 33.3 203.4 65.6C192.2 97.9 146.7 118.5 107 125.1C67.4 131.8 33.7 124.4 -1 125.7C-35.7 127.1 -71.3 137.2 -83.2 121.5C-95.1 105.9 -83.2 64.5 -112.9 24.5C-142.7 -15.4 -214 -54.1 -228.8 -94.8C-243.7 -135.4 -202.1 -178.1 -154.5 -212.5C-107 -246.9 -53.5 -273 -15.6 -251.5C22.3 -230.1 44.7 -161.2 72.7 -120.4"
              fill="none"
              stroke="#1a78eb"
              strokeWidth="6"
            ></path>
          </g>
        </svg>
      </div>

      <div className="bg-center bg-cover bg-no-repeat relative min-h-screen">
        <div className="z-10 pt-6 text-3xl text-white font-bold px-2 md:px-12">
          <Link
            className="rounded px-2 absolute hover:bg-blue-400 transition-colors duration-300"
            to="/"
          >
            Travelly
          </Link>
        </div>
        <div className="container mx-auto px-4 py-16 mt-12">
          <h1 className="text-white text-8xl text-center flex justify-center items-center font-bold mb-4 b-2">
            About Us
          </h1>
          <hr className="border-blue-500 py-2" />
          <p className="text-white font-bold text-xl text-center mt-4">
            What we do, what we stand for, our purpose,
            <br /> our doings and your trust
          </p>
        </div>
        <div className="flex justify-center">
          <div className="border h-[32rem] border-blue-500"></div>
        </div>
        <div className="min-h-screen flex items-center">
          <div className="container mx-auto px-4 mt-12 lg:mt-[-10rem]">
            <div className="flex flex-col items-center lg:flex-row lg:justify-between">
              <div className="w-full lg:w-5/12 text-white my-12">
                <h2 className="text-4xl font-bold mb-16">
                  Discover{" "}
                  <span className="bg-blue-500 rounded-xl py-0 px-2">
                    unforgettable
                  </span>{" "}
                  travel experiences.
                </h2>
                <p className="mt-4 text-lg font-bold mb-16">
                  Our passionate team at Travelly strives to create unique
                  travel experiences for our customers. We are dedicated to
                  providing top-notch service and ensuring that your journey is
                  unforgettable.
                  <span className="bg-blue-500 rounded-xl py-0 px-2">
                    Trust us
                  </span>{" "}
                  to make your dream vacation a reality.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-36 py-12 max-w-8xl mt-[-16rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
            {/* First card */}
            <div className=" p-4 rounded-lg mb-6 pb-12 pt-8 backdrop-blur-lg backdrop-saturate-200 bg-opacity-0 bg-white text-white border border-opacity-30 border-gray-300">
              <div className="mb-4 flex justify-center">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-2xl mb-2 text-center">
                Our Mission
              </h3>

              <hr className="w-full  underline" />
              <p className="font-bold">
                Our mission is to provide the highest quality experiences for
                our users, while fostering a positive and collaborative
                environment for our team.
              </p>
            </div>
            {/* Second card */}
            <div className=" p-4 rounded-lg mb-6 pb-12 pt-8 backdrop-blur-lg backdrop-saturate-200 bg-opacity-0 bg-white text-white border border-opacity-30 border-gray-300">
              <div className="mb-4 flex justify-center">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 9C4 11.9611 5.60879 14.5465 8 15.9297V15.9999C8 18.2091 9.79086 19.9999 12 19.9999C14.2091 19.9999 16 18.2091 16 15.9999V15.9297C18.3912 14.5465 20 11.9611 20 9C20 4.58172 16.4183 1 12 1C7.58172 1 4 4.58172 4 9ZM16 13.4722C17.2275 12.3736 18 10.777 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 10.777 6.7725 12.3736 8 13.4722L10 13.4713V16C10 17.1045 10.8954 17.9999 12 17.9999C13.1045 17.9999 14 17.1045 14 15.9999V13.4713L16 13.4722Z"
                    fill="currentColor"
                  />
                  <path
                    d="M10 21.0064V21C10.5883 21.3403 11.2714 21.5351 12 21.5351C12.7286 21.5351 13.4117 21.3403 14 21V21.0064C14 22.111 13.1046 23.0064 12 23.0064C10.8954 23.0064 10 22.111 10 21.0064Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-2xl mb-2 text-center">
                Our Vision
              </h3>

              <hr className="w-full  underline" />
              <p className="font-bold">
                Our vision is to become a global leader in innovative and
                user-centric products that inspire and empower people to explore
                new possibilities and reach their full potential.
              </p>
            </div>
            {/* Third card */}
            <div className=" p-4 rounded-lg mb-6 pb-12 pt-8 backdrop-blur-lg backdrop-saturate-200 bg-opacity-0 bg-white text-white border border-opacity-30 border-gray-300">
              <div className="mb-4 flex justify-center">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.85327 8C6.85327 5.23858 9.09185 3 11.8533 3C14.6147 3 16.8533 5.23858 16.8533 8C16.8533 10.7614 14.6147 13 11.8533 13C9.09185 13 6.85327 10.7614 6.85327 8ZM11.8533 11C10.1964 11 8.85327 9.65685 8.85327 8C8.85327 6.34315 10.1964 5 11.8533 5C13.5101 5 14.8533 6.34315 14.8533 8C14.8533 9.65685 13.5101 11 11.8533 11Z"
                    fill="currentColor"
                  />
                  <path
                    d="M5 12.1294C6.25216 14.2031 8.4189 15.6624 10.9414 15.9486V18H8.85327V20H14.8533V18H12.9414V15.9266C16.8449 15.3958 19.8532 12.0492 19.8532 8.00001C19.8532 6.43638 19.4046 4.97752 18.6291 3.74512L16.9253 4.79326C17.513 5.72084 17.8532 6.82069 17.8532 8.00001C17.8532 11.3137 15.167 14 11.8532 14C9.66611 14 7.75231 12.8298 6.70381 11.0813L5 12.1294Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-2xl mb-2 text-center">
                Our Values
              </h3>
              <hr className="w-full  underline" />
              <p className="font-bold">
                We are guided by our core values: integrity, innovation,
                excellence, teamwork, and customer focus. These values drive our
                decision-making and shape our company culture.
              </p>
            </div>
            {/* Fourth card */}
            <div className=" p-4 rounded-lg mb-6 pb-12 pt-8 backdrop-blur-lg backdrop-saturate-200 bg-opacity-0 bg-white text-white border border-opacity-30 border-gray-300">
              <div className="mb-4 flex justify-center">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 10L3 18H13L8 10Z" fill="currentColor" />
                  <path
                    d="M10.5286 10.7543L13.5 6L21 18H15.0572L10.5286 10.7543Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-2xl mb-2 text-center">Our Team</h3>
              <hr className="w-full  underline" />
              <p className="font-bold">
                Our diverse and talented team is committed to building products
                that make a positive impact on people's lives. We believe that
                together, we can achieve great things.
              </p>
            </div>
            {/* Fifth card */}
            <div className=" p-4 rounded-lg mb-6 pb-12 pt-8 backdrop-blur-lg backdrop-saturate-200 bg-opacity-0 bg-white text-white border border-opacity-30 border-gray-300">
              <div className="mb-4 flex justify-center">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.12132 9.87868L10.2044 11.9617L10.2106 11.9555L11.6631 13.408L11.6693 13.4142L13.7907 15.5355C15.7433 17.4882 18.9091 17.4882 20.8617 15.5355C22.8144 13.5829 22.8144 10.4171 20.8617 8.46447C18.9091 6.51184 15.7433 6.51184 13.7907 8.46447L13.0773 9.17786L14.4915 10.5921L15.2049 9.87868C16.3764 8.70711 18.2759 8.70711 19.4475 9.87868C20.6191 11.0503 20.6191 12.9497 19.4475 14.1213C18.2759 15.2929 16.3764 15.2929 15.2049 14.1213L13.1326 12.0491L13.1263 12.0554L9.53553 8.46447C7.58291 6.51184 4.41709 6.51184 2.46447 8.46447C0.511845 10.4171 0.511845 13.5829 2.46447 15.5355C4.41709 17.4882 7.58291 17.4882 9.53553 15.5355L10.2488 14.8222L8.83463 13.408L8.12132 14.1213C6.94975 15.2929 5.05025 15.2929 3.87868 14.1213C2.70711 12.9497 2.70711 11.0503 3.87868 9.87868C5.05025 8.70711 6.94975 8.70711 8.12132 9.87868Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-2xl mb-2 text-center">Community</h3>

              <hr className="w-full  underline" />
              <p className="font-bold">
                We are proud to be part of a vibrant community of users,
                developers, and partners. We actively engage with and support
                our community, believing that collaboration is key to our shared
                success.
              </p>
            </div>
            {/* Sixth card */}
            <div className=" p-4 rounded-lg mb-6 pb-12 pt-8 backdrop-blur-lg backdrop-saturate-200 bg-opacity-0 bg-white text-white border border-opacity-30 border-gray-300">
              <div className="mb-4 flex justify-center">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7 14C8.10457 14 9 13.1046 9 12C9 10.8954 8.10457 10 7 10C5.89543 10 5 10.8954 5 12C5 13.1046 5.89543 14 7 14ZM10.4649 10C9.77325 8.8044 8.48056 8 7 8C5.13616 8 3.57006 9.27477 3.12602 11H2C1.44772 11 1 11.4477 1 12C1 12.5523 1.44772 13 2 13H3.12602C3.57006 14.7252 5.13616 16 7 16C9.20914 16 11 14.2091 11 12H13C13 14.2091 14.7909 16 17 16C18.8638 16 20.4299 14.7252 20.874 13H22C22.5523 13 23 12.5523 23 12C23 11.4477 22.5523 11 22 11H20.874C20.4299 9.27477 18.8638 8 17 8C15.5194 8 14.2267 8.8044 13.5351 10H10.4649ZM15 12C15 13.1046 15.8954 14 17 14C18.1046 14 19 13.1046 19 12C19 10.8954 18.1046 10 17 10C15.8954 10 15 10.8954 15 12Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-2xl mb-2 text-center">
                Sustainability
              </h3>
              <hr className="w-full  underline" />
              <p className="font-bold">
                We are dedicated to minimizing our environmental impact and
                promoting sustainable practices in our operations and product
                development. We believe in making a positive impact on the world
                around us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

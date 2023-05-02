import { addDoc, collection, getFirestore } from "firebase/firestore";
import KUTE from "kute.js";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState<string[]>([]);

  const checkboxesRef = useRef<HTMLInputElement[]>([]);

  const registerCheckbox = (ref: HTMLInputElement) => {
    checkboxesRef.current.push(ref);
  };

  const handleCheckboxChange = (e: any) => {
    const { value, checked } = e.target;
    setOptions((prevOptions: string[]) => {
      if (checked) {
        return [...prevOptions, value];
      } else {
        return prevOptions.filter((option) => option !== value);
      }
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const db = getFirestore();
    const contactUsData = {
      name,
      email,
      question,
      options,
    };

    try {
      await addDoc(collection(db, "contactUs"), contactUsData);
      alert("Your message has been sent successfully!");
      setName("");
      setEmail("");
      setQuestion("");
      setOptions([]);

      checkboxesRef.current.forEach((checkbox) => (checkbox.checked = false));
    } catch (e) {
      console.log("An error occured, please try again", e);
    }
  };

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

      <div className="pt-6 text-3xl text-white font-bold px-2 md:px-12 ">
        <Link
          className="rounded px-2 absolute hover:bg-blue-400 transition-colors duration-300"
          to="/"
        >
          Travelly
        </Link>
      </div>
      <div className="min-h-screen flex items-center">
        <div className="container mx-auto px-4 mt-12 lg:mt-[-10rem]">
          <div className="flex flex-col items-center lg:flex-row lg:justify-between">
            <div className="w-full lg:w-5/12 text-white my-12">
              <h1 className="text-4xl font-bold mb-16">
                Have a{" "}
                <span className="bg-blue-500 rounded-xl py-0 px-2 m-2">
                  travel experience ?
                </span>
                We would love to help.
              </h1>
              <p className="mt-4 text-lg font-bold mb-16">
                Our team is ready to help you with any questions or concerns you
                may have about your travel plans. Please fill out the form, and
                we will get back to you
                <span className="bg-blue-500 rounded-xl py-0 px-2 m-2">
                  as soon as possible.
                </span>
              </p>
              <p className="mt-4 text-lg font-bold">support@gmail.com</p>
            </div>
            <form onSubmit={handleSubmit} className="w-full lg:w-5/12 mt-16">
              <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg flex flex-col items-center border border-white border-opacity-25">
                <div className="mb-4 w-full">
                  <h2 className="text-white font-bold text-3xl flex justify-center">
                    Contact form
                  </h2>
                  <p className="text-white font-bold text-md flex justify-center mb-8">
                    Tells us more about yourself and what you have in mind.
                  </p>
                  <label
                    className="block text-white font-bold mb-2 float-left bg-blue-500 rounded-xl py-1 px-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="text-black p-2 rounded-md w-full"
                    required
                  />
                </div>
                <div className="mb-4 w-full">
                  <label
                    className="block text-white font-bold mb-2 float-right bg-blue-500 rounded-xl py-1 px-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-black p-2 rounded-md w-full"
                    required
                  />
                </div>
                <div className="mb-4 w-full">
                  <label
                    className="block text-white font-bold mb-2 float-left bg-blue-500 rounded-xl py-1 px-2"
                    htmlFor="question"
                  >
                    Question
                  </label>
                  <textarea
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    className="text-black p-2 rounded-md w-full h-32"
                    required
                  ></textarea>
                </div>
                <p className="text-white font-bold text-md bg-blue-500 rounded-xl py-1 px-2">
                  How can we help?
                </p>
                <div className="grid grid-cols-2 grid-rows-3 gap-4 my-4 font-bold text-white">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      value="Travel experience"
                      ref={registerCheckbox}
                      onChange={handleCheckboxChange}
                    />
                    Travel experience
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      value="Country selection"
                      ref={registerCheckbox}
                      onChange={handleCheckboxChange}
                    />
                    Country selection
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      value="Bad attitude"
                      ref={registerCheckbox}
                      onChange={handleCheckboxChange}
                    />
                    Bad attitude
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      value="Dangerous place"
                      ref={registerCheckbox}
                      onChange={handleCheckboxChange}
                    />
                    Dangerous place
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      value="Low entertainment"
                      ref={registerCheckbox}
                      onChange={handleCheckboxChange}
                    />
                    Low entertainment
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      value="Discrepancy"
                      ref={registerCheckbox}
                      onChange={handleCheckboxChange}
                    />
                    Discrepancy
                  </label>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-44 xl:px-52 2xl:px-[17rem] rounded mt-4"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

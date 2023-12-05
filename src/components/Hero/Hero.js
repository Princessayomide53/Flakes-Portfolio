import React from "react";
import Ellipse4 from "../../Assets/Ellipse4.png";
import Ellipse5 from "../../Assets/Ellipse5.png";
import Ellipse6 from "../../Assets/Ellipse6.png";
import magic from "../../Assets/magic.png";
import picture from "../../Assets/picture.png";

const Hero = () => {
  const blobStyle = {
    opacity: "1",
  };

  // const stop = {
  //   "stop-color: rgb(244, 242, 241)"
  // }
  return (
    <section className="h-[64rem] bg-[#040013]">
      <header>
        {" "}
        <div className="pt-[2.75rem]">
          <h1 className="text-[3rem] text leading-[3.125rem] font-medium text-center z-50 ">
            Hello, I’m Folake Florence, <br />a{" "}
            <span className="font-bold text-white">Digital Product</span> and
            <span className="font-bold text-white"> Interaction designer</span>
          </h1>
          <div className="pt-[1.31rem] flex justify-center">
            <p className="text-[#C979CF] text-[1.875rem] font-medium leading-normal tracking-[-0.05625rem]">
              I bring design
            </p>
            <img
              src={magic}
              alt=""
              className="object-cover h-[5.125rem] w-[6.5rem] -mt-5"
            />
            <p className="text-[#C979CF] text-[1.875rem] font-medium leading-normal tracking-[-0.05625rem]">
              to mobile and web based applications{" "}
            </p>
          </div>
          <div className="relative">
            <img
              src={Ellipse6}
              alt=""
              className="Ellipse2 absolute -top-[12rem] left-[20rem]"
            />
          </div>
          <div className="flex flex-col relative justify-center -mt-5 items-center">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 500"
              width="17.5%"
              height="16%"
              id="blobSvg"
              style={{ opacity: 1 }}
              filter="blur(0px)"
              transform="rotate(-177)"
              className="blob"
            >
              {" "}
              <defs>
                {" "}
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  {" "}
                  <stop offset="0%" style={{ stopColor: "white" }} />
                  <stop offset="100%" style={{ stopColor: "white" }} />{" "}
                </linearGradient>{" "}
              </defs>{" "}
              <path id="blob" fill="url(#gradient)" style={{ ...blobStyle }}>
                <animate
                  attributeName="d"
                  dur="9000ms"
                  repeatCount="indefinite"
                  values="M425.57934,323.79599Q426.22734,397.59197,355.10104,419.41516Q283.97474,441.23834,222.29242,423.00907Q160.6101,404.77979,95.49644,367.33031Q30.38277,329.88083,44.58128,255.13536Q58.77979,180.3899,99.7419,120.41159Q140.70401,60.43329,214.57221,45.49287Q288.44042,30.55246,350.61367,72.29792Q412.78692,114.04339,418.85914,182.0217Q424.93135,250,425.57934,323.79599Z;M428.39652,310.63781Q395.12039,371.27562,337.58607,396.3189Q280.05174,421.36219,204.00896,441.94775Q127.96619,462.5333,107.32787,385.81839Q86.68955,309.10348,96.33581,253.18955Q105.98207,197.27562,134.68904,148.26665Q163.396,99.25769,224.43929,74.05174Q285.48258,48.8458,334.83632,93.40548Q384.19006,137.96516,422.93135,193.98258Q461.67264,250,428.39652,310.63781Z;M419.06254,317.79517Q411.11118,385.59033,349.66843,425.59894Q288.22568,465.60755,228.34547,428.45831Q168.46526,391.30906,120.24124,353.19622Q72.01722,315.08338,69.86103,249.40801Q67.70483,183.73263,103.47221,120.73263Q139.23958,57.73263,215.36631,36.75347Q291.49305,15.77432,346.41495,69.35242Q401.33686,122.93051,414.17538,186.46526Q427.0139,250,419.06254,317.79517Z;M453.57191,328.53752Q437.08754,407.07503,364.57816,448.74386Q292.06878,490.41269,219.55628,459.1657Q147.04377,427.91871,108.99375,371.46874Q70.94372,315.01876,56.52814,244.52814Q42.11255,174.03752,86.02814,107.96874Q129.94372,41.89995,209.98749,31.84993Q290.03126,21.79991,346.01876,71.89683Q402.00625,121.99375,436.03126,185.99687Q470.05628,250,453.57191,328.53752Z;M404.21696,312.89783Q400.5999,375.79567,344.18719,420.60848Q287.77447,465.42129,222.25959,438.51488Q156.7447,411.60848,114.36806,363.06382Q71.99143,314.51917,65.98083,247.80853Q59.97023,181.09788,105.72982,130.10217Q151.4894,79.10645,216.18088,77.25959Q280.87235,75.41272,335.88295,103.82341Q390.89355,132.2341,399.36378,191.11705Q407.83401,250,404.21696,312.89783Z;M429,328Q437,406,362,433Q287,460,218,442Q149,424,122.5,365Q96,306,74.5,242Q53,178,94.5,115Q136,52,206.5,73Q277,94,347.5,101.5Q418,109,419.5,179.5Q421,250,429,328Z;M433.0232,309.9192Q393.01281,369.83841,338.3352,406.40881Q283.6576,442.97921,221.7752,424.49281Q159.8928,406.0064,119.2384,358.9864Q78.584,311.9664,70.5304,246.7752Q62.4768,181.584,97.7552,114.4464Q133.0336,47.3088,206.208,64.61119Q279.3824,81.91359,342.208,100.8192Q405.0336,119.7248,439.0336,184.8624Q473.0336,250,433.0232,309.9192Z;M425.57934,323.79599Q426.22734,397.59197,355.10104,419.41516Q283.97474,441.23834,222.29242,423.00907Q160.6101,404.77979,95.49644,367.33031Q30.38277,329.88083,44.58128,255.13536Q58.77979,180.3899,99.7419,120.41159Q140.70401,60.43329,214.57221,45.49287Q288.44042,30.55246,350.61367,72.29792Q412.78692,114.04339,418.85914,182.0217Q424.93135,250,425.57934,323.79599Z"
                ></animate>
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  from="0 250 250"
                  to="360 250 250"
                  dur="9000ms"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
            <div className="absolute top-[1.5rem] left-[35.5rem]">
              <img
                src={picture}
                alt=""
                className="w-[17rem] h-[10rem] rounded-2xl object-cover"
              />
              <img
                src={Ellipse5}
                alt=""
                className="absolute -top-[1rem] left-[10.5rem] Ellipse2"
              />
              <div className="relative">
                <img
                  src={Ellipse4}
                  alt=""
                  className="absolute top-[0.5rem] right-2 Ellipse"
                />
              </div>
            </div>
          </div>
          <div className="relative"></div>
        </div>
      </header>
    </section>
  );
};

export default Hero;
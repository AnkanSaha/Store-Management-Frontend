// import Essetial Components & Variables
import { AppLogo, AppName } from "../../Global/Global variables"; // import Features

import { useNavigate } from "react-router-dom"; // import Link

export default function Hero_Comp() {
  const Navigate = useNavigate(); // useNavigate
  return (
    <>
      <div className="hero min-h-screen bg-white">
        <div className="hero-content flex-col lg:flex-row">
          <img src={AppLogo} className="w-96 bg-transparent" />
          <div>
            <h1 className="text-5xl font-bold">We provide the best services</h1>
            <p className="py-6">
              {" "}
              in {AppName}, we provide the best services for your store. we
              describe our services below.
            </p>
            <button
              onClick={() => {
                Navigate("/signup");
              }}
              className="btn btn-accent"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
      <hr />
      <hr />
    </>
  );
}

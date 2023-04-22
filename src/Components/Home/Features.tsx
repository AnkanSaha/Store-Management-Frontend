// import Essetial Components & Variables
import { AppName } from "../../Global/Global variables"; // import AppName
import { Our_Features } from "../../Global/Global Array Variables"; // import Our_Features
import { useNavigate } from "react-router-dom"; // import Link

// interface for Features Array
interface FeaturesS_interface {
  Title: String;
  Description: String;
  ButtonText: String;
  ButtonLink: String;
  ButtonColor: String;
}

export default function Features() {
  const Navigate = useNavigate(); // useNavigate
  return (
    <>
      <h1 className="my-5 ml-[17.25rem] text-5xl font-extrabold dark:text-white">
        {AppName} Features
        <small className="ml-2 font-semibold text-gray-500 dark:text-gray-400">
          (Our Services)
        </small>
      </h1>

      <div className="flex flex-wrap ml-[5.25rem] space-x-3">
        {Our_Features.map(
          (
            {
              Title,
              Description,
              ButtonColor,
              ButtonLink,
              ButtonText,
            }: FeaturesS_interface,
            index
          ) => {
            return (
              <div
                className="card z-30 w-96 bg-base-100 shadow-xl  my-4"
                key={index}
              >
                <div className="card-body">
                  <h2 className="card-title">{Title}</h2>
                  <p>{Description}</p>
                  <div className="card-actions justify-end">
                    <button
                      onClick={() => {
                        Navigate(`${ButtonLink}`);
                      }}
                      className={`btn btn-${ButtonColor}`}
                    >
                      {ButtonText}
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </>
  );
}

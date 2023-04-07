// This is the About Us page content

// import Variables
import { AppName } from "../../Global/Global variables"; // import AppName from '../../Non Changable variables';

function About_Us_Content() {
  return (
    <>
      <div className="mt-[5.25rem] text-center mx-16">
        <h1 className="text-4xl font-bold mb-[8.75rem]">
          About {AppName}
        </h1>
        <p>
          {" "}
          Welcome to <b>{AppName}</b> where we share information related to
          Store Management. We're dedicated to providing you the very best
          information and knowledge of the above mentioned topics.
        </p>

        <p>
          We hope you found all of the information on <b>{AppName}</b>{" "}
          helpful, as we love to share them with you.
        </p>

        <p>
          If you require any more information or have any questions about our
          site, please feel free to contact us by email at{" "}
          <b>ankansahaofficial@gmail.com</b>.
        </p>
      </div>
    </>
  );
}

export default About_Us_Content;

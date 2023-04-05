// import Essential Packages

// import Components
import Navbar from "../Components/Most Used Components/Navbar"; // import Navbar
import Footer from "../Components/Most Used Components/Footer"; // import Footer
import Upper_First_Section from "../Components/Home/Upper First Section"; // import Upper First Section
import Upper_Second_Section from "../Components/Home/Upper Second Section"; // import Upper Second Section
import Features from "../Components/Home/Features"; // import Features Section

// import Functions
import { Update_Document_Title } from "../Functions/Most Used Functions"; // import Functions

// import Variables
import { AppName } from "../Non Changable variables"; // import App Name

// This function is used to update the document title. 
// It is used in the HomePage component to update the document title.

function HomePage() {
  Update_Document_Title({ TitleName: "Home - Store Manager" }); // Update Document Title
  return (
    <>
      <Navbar AppName={AppName} />
      <Upper_First_Section />
      <Upper_Second_Section />
      <Features />
      <Footer FooterStyle="static" />
    </>
  );
}
export default HomePage;

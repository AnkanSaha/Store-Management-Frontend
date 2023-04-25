// This component is used to display a message when no data is found in the database

// import Variables & Context
import { Heading } from "@chakra-ui/react";
import Footer from "../../Most Used Components/Footer";

export default function Dashboard_No_Data_Found() {
  return (
    <>
     <Heading className="text-center">
        No Data Found
      </Heading>
      <Footer />
    </>
  )
}

// Sidebar By Chakra ui

// import all the components we are going to use
import { useContext } from "react"; // import useContext hook

// import context
import { GlobalContext } from "../../../../Context/Context API"; // import Global Context

// interface for Sidebar
interface props {
  AdminName: string;
}

// import ui components
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from "@chakra-ui/react";

// import icons
import { TiThMenuOutline } from "react-icons/ti";

// import React Hooks
import { useDisclosure } from "@chakra-ui/react";

// import variables
import { Dashboard_Sidebar_Options } from "../../../../Global/Global Array Variables"; // import Dashboard Sidebar Options

export default function Sidebar({ AdminName }: props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // use context
  const { UpdateSidebarOption }: any = useContext(GlobalContext); // use setSidebarOption from Global Context

  return (
    <>
      <Button
        leftIcon={<TiThMenuOutline />}
        className="mt-[19.25rem] ml-[2.25rem] absolute "
        colorScheme="teal"
        onClick={onOpen}
      >
        Open menu
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader bgColor="Highlight">{`Welcome ${AdminName}`}</DrawerHeader>

          <DrawerBody>
            <div className="py-4 overflow-y-auto">
              <ul className="space-y-2 font-medium">
                {Dashboard_Sidebar_Options.map((item, index) => {
                  return (
                    <li key={index}>
                      <a
                        onClick={() => {
                          UpdateSidebarOption(item.OptionValue);
                          onClose();
                        }}
                        className=" font-bold cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <span className="ml-3">{item.Title}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Close Menu
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

Sidebar.defaultProps = {
  AdminName: "User",
}; // Sidebar Default Props

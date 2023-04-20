// Sidebar By Chakra ui
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

import { TiThMenuOutline } from "react-icons/ti";

import { useDisclosure } from "@chakra-ui/react";

// import variables
import { Dashboard_Sidebar_Options } from "../../../Global/Global variables"; // import Dashboard Sidebar Options

export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        leftIcon={<TiThMenuOutline />}
        className="mt-[19.25rem] ml-[3.25rem] "
        colorScheme="teal"
        onClick={onOpen}
      >
        Open menu
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Choose Your Action</DrawerHeader>

          <DrawerBody>
            <div className="py-4 overflow-y-auto">
              <ul className="space-y-2 font-medium">
                {Dashboard_Sidebar_Options.map((item, index) => {
                  return (
                    <li key={index}>
                      <a className=" font-bold cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
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

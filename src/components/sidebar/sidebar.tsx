import { Flex } from "@chakra-ui/react";
import * as React from "react";
import SidebarItem from "./SidebarItem";
import {
  FiHome,
  FiBookOpen,
  FiUserPlus,
  FiUsers,
  FiBook,
  FiSettings,
} from "react-icons/fi";
import { FaAngleDown, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Sidebar } from "../style/Sidebar.styled";
import { Button, ButtonText } from "../style/Button.styled";

interface SidebarI {
  key: any;
  iconName: any;
  title: string;
  move?: any;
  dropdownItems?: any[];
}

const sidebarItems: SidebarI[] = [
  {
    key: "dashboard",
    iconName: FiHome,
    title: "Dashboard",
    move: "/layout/dashboard",
  },
  {
    key: "book_list",
    iconName: FiBookOpen,
    title: "Manage Books",

    dropdownItems: [
      { item: "View Books", move: "/layout/allBooks" },
      { item: "Add Books" },
    ],
  },
  { key: "add_books", iconName: FiBook, title: "Add Books" },
  { key: "Dashboard", iconName: FiUsers, title: "Users", move: "" },
  {
    key: "add_user",
    iconName: FiUserPlus,
    title: "Add User",
    move: "",
  },
  {
    key: "settings",
    iconName: FiSettings,
    title: "Settings",
    move: "",
  },
];

export default function SidebarMain() {
  const [navSize, setNavSize] = React.useState("large");

  return (
    <Sidebar>
      <Flex
        p={2}
        w={navSize === "small" ? "70px" : "230px"}
        h="100%"
        flexDir="column"
      >
        <Flex paddingBottom={3} justifyContent={"flex-end"}>
          <Button
            style={{ width: 20, height: 20, borderRadius: 10 }}
            onClick={() => {
              if (navSize === "small") {
                setNavSize("large");
              } else {
                setNavSize("small");
              }
            }}
          >
            {navSize === "small" ? (
              <ButtonText>
                <FaArrowRight size={10} />
              </ButtonText>
            ) : (
              <ButtonText>
                <FaArrowLeft size={10} />
              </ButtonText>
            )}
          </Button>
        </Flex>

        {sidebarItems.map((item) => (
          <SidebarItem
            key={item.title}
            title={item.title}
            icon={item.iconName}
            iconRight={item.dropdownItems && FaAngleDown}
            navSize={navSize}
            to={item.move}
            dropdownItems={item.dropdownItems}
          />
        ))}
      </Flex>
    </Sidebar>
  );
}

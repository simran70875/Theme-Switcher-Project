import {
  Avatar,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import { FaAngleDown, FaRegBell, FaSignOutAlt, FaUser } from "react-icons/fa";
import { FaDisplay } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import {
  Header,
  HeaderLogo,
  HeaderText,
  HeaderIcon,
  HeaderInput,
} from "./style/Header.styled";

export interface Headerrops {}
export function HeaderMain(props: Headerrops) {
  const navigate = useNavigate();
  return (
    <Header>
      <HeaderLogo>Book Store </HeaderLogo>

      <Flex flex={1} justifyContent={"center"}>
        <HeaderInput>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <HeaderIcon>
                <FiSearch fontSize="1em" color="gray" />
              </HeaderIcon>
            </InputLeftElement>
            {/* <HeaderText> */}
            <Input
              fontSize={15}
              fontFamily={"monospace"}
              focusBorderColor="#fff0"
              borderWidth={0}
              placeholder="Search ISBN,Author,Title,Member,etc."
              // size="md"
            />
            {/* </HeaderText> */}
          </InputGroup>
        </HeaderInput>
      </Flex>

      <Flex alignItems={"center"} justifyContent={"flex-end"}>
        <Link to={""}>
          <HeaderIcon>
            <FaRegBell fontSize={"1.2em"} />
          </HeaderIcon>
        </Link>
        <Spacer flex={0} px={"5px"} />
        <Avatar size="sm" src="avatar-1.jpg" />
        <Stack mx={4} gap={0}>
          <HeaderText>Sylwia Weller</HeaderText>
          <HeaderText>Admin</HeaderText>
        </Stack>

        <Menu>
          <HeaderIcon>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<FaAngleDown />}
              variant="unstyled"
            />
          </HeaderIcon>

          <MenuList>
            <MenuItem icon={<FaDisplay />}>Frontend</MenuItem>
            <MenuItem icon={<FaUser />}>Profile</MenuItem>
            <MenuItem onClick={() => navigate("/")} icon={<FaSignOutAlt />}>
              Sign out
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Header>
  );
}

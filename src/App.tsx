import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Dashboard from "./screens/admin/dashboard";
import { Route, Routes } from "react-router-dom";
import { AllBooks } from "./screens/admin/manage_books/allBooks";
import { GlobalStyles } from "./components/style/Global";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { light, dark, blue, purple } from "./components/style/Theme.styled";

import {
  ThemeButton,
  ThemeContainer,
} from "./components/style/ThemeSwitching.styled";
import { FiSettings } from "react-icons/fi";
import { Button, ButtonText } from "./components/style/Button.styled";
import Layout from "./screens/layout/layout";
import { Signup } from "./screens/auth/Signup";
import { ForgotPassword } from "./screens/auth/forgotPassword";
import { Login } from "./screens/auth/login";

export default function App() {
  const [show, setShow] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState<DefaultTheme>(light);
  
  useEffect(() => {
    const currentTheme = JSON.parse(
      localStorage.getItem("current-theme") || "null"
    );
    if (currentTheme) {
      setSelectedTheme(currentTheme);
    }
  }, []);

  const HandleThemeChange = (theme: DefaultTheme) => {
    setSelectedTheme(theme);
    localStorage.setItem("current-theme", JSON.stringify(theme));
    setShow(false);
  };

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/signup" Component={Signup} />
        <Route path="/forgotPassword" Component={ForgotPassword} />
        <Route path="/layout" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="allBooks" element={<AllBooks />} />
        </Route>
      </Routes>

      <Flex
        pos={"absolute"}
        zIndex={1}
        justifyContent={"flex-end"}
        right={0}
        top={"30vh"}
      >
        {show && (
          <ThemeContainer style={{ backgroundColor: "#fff" }}>
            <ThemeButton
              className={`light ${selectedTheme === light ? "active" : ""}`}
              onClick={() => HandleThemeChange(light)}
            ></ThemeButton>
            <ThemeButton
              className={`dark ${selectedTheme === dark ? "active" : ""}`}
              onClick={() => HandleThemeChange(dark)}
            ></ThemeButton>
            <ThemeButton
              className={`blue ${selectedTheme === blue ? "active" : ""}`}
              onClick={() => HandleThemeChange(blue)}
            ></ThemeButton>
            <ThemeButton
              className={`purple ${selectedTheme === purple ? "active" : ""}`}
              onClick={() => HandleThemeChange(purple)}
            ></ThemeButton>
          </ThemeContainer>
        )}

        <Button
          style={{ borderRadius: 0, width: 40, height: 40 }}
          onClick={() => {
            setShow(!show);
          }}
        >
          <ButtonText>
            <FiSettings size={20} />
          </ButtonText>
        </Button>
      </Flex>
    </ThemeProvider>
  );
}

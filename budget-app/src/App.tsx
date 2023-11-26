import { Box, ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/home";
import NewBudget from "./screens/newBudget";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box bg={"#FCFCFC"} minH="100vh" position={"relative"}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-budget" element={<NewBudget />} />
        </Routes>
      </Router>
    </Box>
  </ChakraProvider>
);

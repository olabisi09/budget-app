import { Box } from "@chakra-ui/react";
import CustomNav from "./nav";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box as="nav">
      {children}
      <CustomNav />
    </Box>
  );
};

export default Layout;

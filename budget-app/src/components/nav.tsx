import { Flex, Text, VStack } from "@chakra-ui/react";
import { ReactComponent as Home } from "../svgs/home.svg";
import { ReactComponent as Reports } from "../svgs/report.svg";
import { ReactComponent as Chat } from "../svgs/tee.svg";
import { ReactComponent as Chart } from "../svgs/chart.svg";
import { ReactComponent as Profile } from "../svgs/profile.svg";

const icons = [
  { icon: <Home />, text: "Home" },
  { icon: <Reports />, text: "Reports" },
  { icon: <Chat />, text: "Chat" },
  { icon: <Chart />, text: "Budget" },
  { icon: <Profile />, text: "Profile" },
];

const CustomNav = () => {
  return (
    <Flex
      bg={"#FFFFFF"}
      width={"100%"}
      position={"absolute"}
      bottom={0}
      justifyContent={"space-between"}
      px="2.5rem"
      py="1.5rem"
      as="nav"
    >
      {icons.map((item, index) => (
        <VStack
          maxH={"3.745rem"}
          alignItems={"center"}
          justifyContent={"space-between"}
          key={index}
        >
          {item.icon}
          <Text fontSize={"0.75rem"}>{item.text}</Text>
        </VStack>
      ))}
    </Flex>
  );
};

export default CustomNav;

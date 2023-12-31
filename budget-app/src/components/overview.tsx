import { Box, TabPanel, Text } from "@chakra-ui/react";
import { ReactComponent as ChartTwo } from "../svgs/chart-expenses.svg";
import { ReactComponent as ChartCategory } from "../svgs/chart-category.svg";

const Overview = ({
  currentView,
}: {
  currentView: "expenses" | "category";
}) => {
  if (currentView === "expenses") {
    return (
      <TabPanel
        marginTop={"2rem"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box position={"relative"}>
          <ChartTwo />
          <Text
            position={"absolute"}
            margin={"auto"}
            top={"50%"}
            left={"50%"}
            transform={"translateY(-50%) translateX(-50%)"}
            fontSize={"2.25rem"}
            color={"#0466C8"}
            fontWeight={700}
          >
            49%
          </Text>
        </Box>
        <Text color={"#707480"} marginTop={"1.31rem"}>
          Amount spent so far
        </Text>
        <Text color={"#0466C8"}>
          <b>N50,000/</b>N120,000
        </Text>
      </TabPanel>
    );
  }
  return (
    <TabPanel
      marginTop={"2rem"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <ChartCategory />
      <Text color={"#707480"} marginTop={"1.31rem"}>
        Amount spent so far
      </Text>
      <Text color={"#0466C8"}>
        <b>N50,000/</b>N120,000
      </Text>
    </TabPanel>
  );
};

export default Overview;

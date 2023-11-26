import {
  Box,
  Center,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  TableContainer,
  Tabs,
  Tbody,
  Td,
  Text,
  Tr,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { GoKebabHorizontal } from "react-icons/go";
import { ReactComponent as Naira } from "../svgs/naira.svg";
import { ReactComponent as Food } from "../svgs/food.svg";
import { ReactComponent as Savings } from "../svgs/savings.svg";
import { ReactComponent as Empty } from "../svgs/empty.svg";
import { useState } from "react";
import Overview from "./overview";

const Home = () => {
  const [currentView, setCurrentView] = useState<"expenses" | "category">(
    "expenses"
  );
  const setToExpenses = () => setCurrentView("expenses");
  const setToCategory = () => setCurrentView("category");

  return (
    <Box py="1.25rem" px="1.87rem">
      <Heading>Budget</Heading>
      <Flex marginBlockStart="1.75rem" gap="0.62rem">
        <Wrap>
          <WrapItem borderRadius="50%" bg="#0466C833">
            <Naira />
          </WrapItem>
        </Wrap>
        <Heading color="#707480" size="14px" fontWeight={400}>
          Monthly budget
        </Heading>
      </Flex>

      <Box
        borderRadius={10}
        fontSize="1.75rem"
        fontWeight={700}
        marginBlockStart="0.63rem"
        paddingInline="1.25rem"
        paddingBlock="0.5rem"
        boxShadow="0px 5px 10px 2px rgba(0, 0, 0, 0.03)"
      >
        N120,000
      </Box>

      <Tabs>
        <TabList
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex>
            <Tab>Last Month</Tab>
            <Tab>This Month</Tab>
          </Flex>

          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<GoKebabHorizontal />}
              variant="outline"
            />
            <MenuList>
              <MenuItem
                onClick={setToExpenses}
                alignItems={"center"}
                gap={"0.62rem"}
              >
                <Wrap>
                  <WrapItem borderRadius="50%" bg="#0466C833">
                    <Naira />
                  </WrapItem>
                </Wrap>
                Expenses overview
              </MenuItem>
              <MenuItem
                onClick={setToCategory}
                alignItems={"center"}
                gap={"0.62rem"}
              >
                <Wrap>
                  <WrapItem borderRadius="50%" bg="#0466C833">
                    <Naira />
                  </WrapItem>
                </Wrap>
                Category overview
              </MenuItem>
            </MenuList>
          </Menu>
        </TabList>

        <TabPanels>
          <Overview currentView={currentView} />
          <TabPanel alignItems={"center"} justifyContent={"center"}>
            <Center flexDirection={"column"}>
              <Empty />
              <Text noOfLines={2} textAlign={"center"}>
                You haven't created a budget for this month yet
              </Text>
            </Center>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Heading marginBlockStart={"2rem"} size="lg">
        Category Breakdown
      </Heading>
      <br />
      <TableContainer>
        <Table variant="unstyled">
          <Tbody>
            <Tr>
              <Td>
                <Food />
              </Td>
              <Td>
                <VStack alignItems={"flex-start"}>
                  <Heading fontSize="0.875rem" fontWeight={500}>
                    Food and Drink
                  </Heading>
                  <Text fontSize="0.875rem" color="#707480">
                    40%
                  </Text>
                </VStack>
              </Td>
              <Td isNumeric>
                <b>N20,000/</b>N42,000
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Savings />
              </Td>
              <Td>
                <VStack alignItems={"flex-start"}>
                  <Heading fontSize="0.875rem" fontWeight={500}>
                    Savings
                  </Heading>
                  <Text fontSize="0.875rem" color="#707480">
                    20%
                  </Text>
                </VStack>
              </Td>
              <Td isNumeric>
                <b>N10,000/</b>N24,000
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Home;

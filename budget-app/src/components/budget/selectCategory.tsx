import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  IconButton,
  NumberInput,
  NumberInputField,
  Select,
  Spacer,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { ReactComponent as Savings } from "../../svgs/savings-small.svg";
import { ReactComponent as Food } from "../../svgs/food-small.svg";
import { ReactComponent as Minus } from "../../svgs/minus.svg";
import { ReactComponent as Plus } from "../../svgs/plus.svg";
import { useState } from "react";
import { Budget, InitProps } from "./types";
import { useFormikContext } from "formik";

interface StepProps {
  activeStep: number;
  nextStep: () => void;
  prevStep: () => void;
}

const SelectCategory = ({ activeStep, nextStep, prevStep }: StepProps) => {
  const { values } = useFormikContext<Budget>();
  const [fields, setFields] = useState<InitProps[]>([]);
  const [field, setField] = useState<InitProps>({
    amount: 0,
    category: "",
    percentage: 0,
  });
  const getBudgetPercentage = Number(
    ((values?.budgetAmount * 100) / field?.amount)?.toFixed(0)
  );

  const addBudget = () => {
    if (field.amount === 0 || field.category === "") {
      return;
    }
    setFields([...fields, field]);
    setField({ amount: 0, category: "", percentage: 0 });
  };

  const removeBudget = (index: number) => {
    const updatedFields = [...fields];
    updatedFields.splice(index, 1);
    setFields(updatedFields);
  };

  return (
    <Box
      pt="1.25rem"
      pb="3.38rem"
      px="1.87rem"
      height={"100vh"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          onClick={prevStep}
          icon={<BsArrowLeft />}
          aria-label={"back"}
        />
        <Text>{activeStep}/3</Text>
      </Flex>
      <Box display={"flex"} flexDirection={"column"}>
        <VStack
          display={"flex"}
          flexDirection={"column"}
          paddingInlineEnd={"1.5rem"}
          alignItems={"flex-start"}
        >
          <Heading
            fontSize={"1.75rem"}
            fontWeight={700}
            marginBlockStart={"1.88rem"}
          >
            Create new budget
          </Heading>
          <Text fontSize={"0.75rem"}>
            How much would you like to spend on <br /> each category this month?
          </Text>
          <br />
          <Select
            bg="#FFFFFF"
            color="#A8AFBF"
            placeholder="Select Expense Category"
            border={"none"}
            boxShadow={"0px 5px 10px 2px rgba(0, 0, 0, 0.03)"}
            onChange={(e) => setField({ ...field, category: e.target.value })}
          >
            <option value="Food and Drink">Food and Drink</option>
            <option value="Savings">Savings</option>
          </Select>
          <br />
          <NumberInput variant={"flushed"}>
            <NumberInputField
              placeholder="Amount (in N)"
              borderBottomColor={"#A8AFBF"}
              onChange={(e) =>
                setField({ ...field, amount: parseInt(e.target.value) })
              }
            />
          </NumberInput>
        </VStack>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Text color={"#0466C8"}>
            % of total budget: {getBudgetPercentage}%
          </Text>
          <IconButton
            _focus={{ bg: "transparent" }}
            marginLeft={"auto"}
            bg={"transparent"}
            aria-label="Add"
            icon={<Plus />}
            onClick={addBudget}
          />
        </Flex>
        <TableContainer>
          <Table variant="unstyled">
            <Tbody>
              {fields?.map((field, index) => (
                <Tr key={index}>
                  <Td>
                    <HStack spacing={"0.63rem"} alignItems={"center"}>
                      {field.category === "Savings" ? <Savings /> : <Food />}
                      <Heading fontSize="0.875rem" fontWeight={500}>
                        {field.category}
                      </Heading>
                    </HStack>
                  </Td>
                  <Spacer />
                  <Td isNumeric>{field.amount}</Td>
                  <Td>20%</Td>
                  <Td>
                    <IconButton
                      _focus={{ bg: "transparent" }}
                      marginLeft={"auto"}
                      bg={"transparent"}
                      aria-label="Remove"
                      icon={<Minus />}
                      onClick={() => removeBudget(index)}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Flex marginTop={"auto"} justifyContent={"space-between"}>
        <Text>% of budget remaining: {100 - getBudgetPercentage}%</Text>
        <Button
          rightIcon={<BsArrowRight fill="#0466C8" />}
          colorScheme="#67A2DC"
          color={"#0466C8"}
          variant="link"
          type="submit"
        >
          Done
        </Button>
      </Flex>
    </Box>
  );
};

export default SelectCategory;

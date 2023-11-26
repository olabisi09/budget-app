import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  NumberInput,
  NumberInputField,
  Text,
} from "@chakra-ui/react";
import { useFormikContext } from "formik";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Budget, InitProps } from "./types";

interface StepProps {
  activeStep: number;
  nextStep: () => void;
  prevStep: () => void;
}

const NewBudget = ({ activeStep, nextStep, prevStep }: StepProps) => {
  const { errors, touched, handleChange } = useFormikContext<Budget>();
  return (
    <Box
      pt="1.25rem"
      pb="3.38rem"
      px="1.87rem"
      height={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
    >
      <Box>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            onClick={prevStep}
            icon={<BsArrowLeft />}
            aria-label={"back"}
          />
          <Text>{activeStep}/3</Text>
        </Flex>
        <Heading
          fontSize={"1.75rem"}
          fontWeight={700}
          marginBlockStart={"1.88rem"}
        >
          Create new budget
        </Heading>
        <Text fontSize={"0.75rem"}>
          How much would you like to budget for <br /> this month?
        </Text>
        <br />
        <NumberInput variant={"flushed"}>
          <NumberInputField
            name="budgetAmount"
            onChange={handleChange}
            placeholder="Amount (in N)"
            borderBottomColor={"#A8AFBF"}
          />
          {errors?.budgetAmount && touched?.budgetAmount ? (
            <div>{errors?.budgetAmount?.toString()}</div>
          ) : null}
        </NumberInput>
      </Box>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Text
          textDecoration={"underline"}
          color={"#67A2DC"}
          textDecorationColor={"#67A2DC"}
        >
          Create from spending pattern
        </Text>
        <Button
          type="submit"
          rightIcon={<BsArrowRight fill="#0466C8" />}
          colorScheme="#67A2DC"
          color={"#0466C8"}
          variant="link"
          alignItems={"center"}
        >
          Next
        </Button>
      </Flex>
    </Box>
  );
};

export default NewBudget;

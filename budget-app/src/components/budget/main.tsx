import { useState } from "react";
import SelectCategory from "./selectCategory";
import NewBudget from "./newBudget";
import { FormikProvider, FormikValues, useFormik } from "formik";
import { initialValues, validationRules } from "./form";

interface StepProps {
  activeStep: number;
  nextStep: () => void;
  prevStep: () => void;
}

const CurrentStep = ({ activeStep, nextStep, prevStep }: StepProps) => {
  switch (activeStep) {
    case 1:
      return (
        <NewBudget
          activeStep={activeStep}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 2:
      return (
        <SelectCategory
          activeStep={activeStep}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    default:
      return (
        <NewBudget
          activeStep={activeStep}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
  }
};

const Main = () => {
  const [activeStep, setActiveStep] = useState(1);
  const nextStep = () => setActiveStep((prev) => prev + 1);
  const prevStep = () => setActiveStep((prev) => prev - 1);

  const formik = useFormik<FormikValues>({
    initialValues: initialValues,
    validationSchema: validationRules,
    onSubmit: () => {
      nextStep();
    },
  });

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit}>
        <CurrentStep
          activeStep={activeStep}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      </form>
    </FormikProvider>
  );
};

export default Main;

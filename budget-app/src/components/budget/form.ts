import * as Yup from "yup";

export const initialValues = {
  budgetAmount: 0,
}

// export const validationRules = Yup.object().shape({
//   budget: Yup.number().required("Budget is required"),
//   budgetType: Yup.array().of(
//     Yup.object().shape({
//       amount: Yup.number().required("Amount is required"),
//   category: Yup.string().required("Category is required"),
//   percentage: Yup.number().required("Percentage is required"),
//     })
//   )
// })
export const validationRules = Yup.object().shape({
  budgetAmount: Yup.number().required("required"),
  // budgetType: Yup.array().of(
  //   Yup.object().shape({
  //     amount: Yup.number(),
  // category: Yup.string(),
  // percentage: Yup.number(),
  //   })
  // )
})
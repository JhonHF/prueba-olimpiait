import * as yup from "yup";

export const schema = yup.object().shape({
  uid: yup.number().required().positive(),
  nit: yup.number().positive().required(),
  description: yup.string().required(),
  total: yup.number().positive().required(),
  percentage: yup.number().positive(),
});

import * as yup from "yup";

export const schema = yup.object().shape({
  inputFile: yup.array().of(yup.string().required()).min(1),
});

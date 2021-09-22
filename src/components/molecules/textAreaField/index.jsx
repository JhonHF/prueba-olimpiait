import React from "react";
import { Input } from "antd";
import { useField } from "formik";
import { StyledErrMessage } from "./styles";


export const TextAreaField = ({name, label, ...props}) => {
  const [field, meta] = useField(name);
  return (
    <>
      {label && <label>{label}</label>}
      <Input.TextArea {...field} {...props} />
      {meta.error && meta.touched && (
        <StyledErrMessage>{meta.error}</StyledErrMessage>
      )}
    </>
  );
};

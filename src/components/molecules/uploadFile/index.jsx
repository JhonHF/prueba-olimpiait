import React from "react";
import { useField } from "formik";
import { Input } from "antd";
import { StyledErrMessage } from "./styles";

export const InputFile = ({ name, label, ...props }) => {
  const [, meta, { setValue }] = useField(name);

  const handleChange = (e) => {
    const reader = new FileReader();
    reader.readAsText(e.target.files[0]);

    reader.onload = () => {
      const listNumbers = reader.result.split("\r\n");
      setValue(listNumbers);
    };
    reader.onerror = () => {
      console.log("Hubo un error al seleccionar el archivo", reader.error);
    };
  };

  return (
    <>
      {label && <label>{label}</label>}
      <Input {...props} onChange={handleChange} />
      {meta.error && meta.touched && (
        <StyledErrMessage>{meta.error}</StyledErrMessage>
      )}
    </>
  );
};

import React from "react";
import { Formik, Form as FormikForm } from "formik";
import { useDispatch } from "react-redux";
import { Button, Form } from "antd";
import { schema } from "./validations";
import { InputFile } from "../../molecules/uploadFile";
import { setListNumbers } from "../../../store/listNumbers/actions";

export const DividerUploader = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ inputFile }) => {
    dispatch(setListNumbers(inputFile));
  };

  return (
    <Formik
      initialValues={{ inputFile: [] }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ submitForm }) => (
        <FormikForm>
          <h3>Condiciones para subir lista de numeros</h3>
          <ol>
            <li>Debe ser formato .txt</li>
            <li>
              No debe tener espacios y solo tener una interlinea entre grupos de
              numeros
            </li>
          </ol>
          <Form.Item>
            <InputFile name="inputFile" type="file" accept=".txt" />
          </Form.Item>
          <Button type="primary" onClick={submitForm}>
            Escanear archivo
          </Button>
        </FormikForm>
      )}
    </Formik>
  );
};

import React from "react";
import { DividerUploader } from "../../forms/dividerUploader";
import { MainLayout } from "../../layouts/mainLayout";
import { CheckMultiple } from "../../organims/checkMultiple";

export const MultipleOfThree = () => {
  return (
    <MainLayout>
      <CheckMultiple />
      <DividerUploader />
    </MainLayout>
  );
};

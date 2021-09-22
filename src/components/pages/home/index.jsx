import React from "react";
import { MainLayout } from "../../layouts/mainLayout";
import { Wellcome } from "../../organims/wellcome";

export const Home = () => {
  return (
    <MainLayout header="Prueba tecnica OlimpiaIT">
      <Wellcome />
    </MainLayout>
  );
};

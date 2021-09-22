import React from "react";
import { useSelector } from "react-redux";
import { MultipleResult } from "../../molecules/multipleResult";

export const CheckMultiple = () => {
  const { listNumbers } = useSelector((state) => state.listNumbers);

  const result = listNumbers.map((groupNumbers, index) => {
    const arrNumbers = groupNumbers.split("");
    const sum = arrNumbers.reduce((acc, n) => acc + parseInt(n, 10), 0);
    const item = {
      key: index,
      initial: groupNumbers,
      isMultiple: sum % 3 ? "No" : "Si",
    };
    return item;
  });

  return (
    <>
      {listNumbers.length ? (
        <MultipleResult list={result} />
      ) : (
        <h3>No tienes numeros para analizar aun</h3>
      )}
    </>
  );
};

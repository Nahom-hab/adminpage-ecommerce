"use client"
import React, { createContext, useState } from 'react';
import { CatagoryData } from '@/data/catagoryData';
import { productData } from '@/data/productdata';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [categoryData, setCatagoryData] = useState(CatagoryData);

  const updateCatagoryData = (newData) => {
    setCatagoryData(newData);
  };
  const [productdata, setproductdata] = useState(productData);

  const updateproductData = (newData) => {
    setproductdata(newData);
  };

  return (
    <DataContext.Provider value={{ categoryData, productdata,updateproductData,updateCatagoryData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;

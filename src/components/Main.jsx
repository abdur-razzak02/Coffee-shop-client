import { useLoaderData } from "react-router-dom";
import SubBanner from "./SubBanner";
import Banner from "./Banner";
import InstagramPhotos from "./InstagramPhotos";
import Coffees from "./Coffees";
import { useState } from "react";

const Main = () => {
  const loadedCoffees = useLoaderData();
  console.log(loadedCoffees);
  
  return (
    <div>
      <Banner></Banner>
      <SubBanner></SubBanner>
      <div className="bg-all-coffee-bg bg-cover bg-center bg-no-repeat mt-5 sm:mt-10 lg:mt-20">
        <p className="text-center mb-2">--- Sip & Savor ---</p>
        <h1 className="text-coffee text-4xl font-semibold font-rancho mb-5 text-center xl:mb-10">
          Our Popular Products
        </h1>
        <Coffees loadedCoffees={[loadedCoffees]}></Coffees>
      </div>
      <InstagramPhotos></InstagramPhotos>
    </div>
  );
};

export default Main;

"use client";
import {FEATURES_DATA} from "@/constants/Features.constants";
import React from "react";
import {FeatureItem} from "./FeatureItem.component";

const Features = () => {
  return (
    <>
      {FEATURES_DATA.map((feature, index) => (
        <FeatureItem key={index} {...feature} />
      ))}
    </>
  );
};

export default Features;

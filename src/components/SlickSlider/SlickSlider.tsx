"use client";

import ReactSlick, { Settings } from "react-slick";
import { PropsWithChildren } from "react";

const SlickSlider = ReactSlick as unknown as React.ComponentType<
  PropsWithChildren<Settings>
>;

export default SlickSlider;
export type { CustomArrowProps, Settings } from "react-slick";

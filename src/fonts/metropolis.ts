import localFont from "next/font/local";

const metropolis = localFont({
  src: [
    {
      path: "./metropolis/metropolis-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./metropolis/metropolis-latin-400-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./metropolis/metropolis-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./metropolis/metropolis-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./metropolis/metropolis-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

export default metropolis;

import { NextUIProvider } from "@nextui-org/react";
import { createTheme } from "@nextui-org/react";
import Nav from "../layouts/Nav";
import dynamic from "next/dynamic";

const darkTheme = createTheme({
  type: "dark",
});

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider theme={darkTheme}>
      <Nav />
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
});

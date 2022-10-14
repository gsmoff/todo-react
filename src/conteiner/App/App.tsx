import React from 'react'
import CssBaseline from "@mui/material/CssBaseline";

import Header from "../../Footer/footer";
import Main from "../../Main/Main";
import Footer from "../../Header/Header";

type Props = {}

const App = (props: Props) => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App
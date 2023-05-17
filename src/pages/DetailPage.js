import React, { useEffect } from "react";
import Detail from "../components/Detail";
import Header from "../components/Header";
import Footer from "../components/Footer";

const DetailPage = ({ tourData }) => {
  useEffect(() => {
    // Scroll to the top of the page when the component is rendered
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Detail tourData={tourData} />
      <Footer />
    </>
  );
};

export default DetailPage;

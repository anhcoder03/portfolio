import React from "react";
import Layout from "../components/layout/Layout";
import Banner from "../components/Banner";
import AboutMe from "../components/AboutMe";
import FindMe from "../components/FindMe";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <FindMe></FindMe>
    </Layout>
  );
};

export default HomePage;

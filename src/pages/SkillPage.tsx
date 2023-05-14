import React from "react";
import Layout from "../components/layout/Layout";
import ListSkill from "../components/ListSkill";
import ListToolUsed from "../components/ListToolUsed";

const SkillPage: React.FC = () => {
  return (
    <Layout>
      <ListSkill></ListSkill>
      <ListToolUsed></ListToolUsed>
    </Layout>
  );
};

export default SkillPage;

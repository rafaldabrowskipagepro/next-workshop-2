import { GetStaticProps, NextPage } from "next";
import React from "react";
import data from "../../big_data.json";

type SSGPage = {
  renderedAt: string;
};

const SSGPage: NextPage<SSGPage> = ({ renderedAt }) => {
  return <div>This page was rendered at {renderedAt}</div>;
};

export default SSGPage;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      renderedAt: new Intl.DateTimeFormat(undefined, {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        fractionalSecondDigits: 3,
      }).format(new Date()),
      data,
    },
  };
};

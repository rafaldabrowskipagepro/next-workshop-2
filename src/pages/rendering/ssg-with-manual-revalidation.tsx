import { GetStaticProps, NextPage } from "next";
import React from "react";

type SSGWithManualRevalidationPage = {
  renderedAt: string;
};

const SSGWithManualRevalidation: NextPage<SSGWithManualRevalidationPage> = ({
  renderedAt,
}) => {
  return <div>This page was rendered at {renderedAt}</div>;
};

export default SSGWithManualRevalidation;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      renderedAt: new Intl.DateTimeFormat(undefined, {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        fractionalSecondDigits: 3,
      }).format(new Date()),
    },
  };
};

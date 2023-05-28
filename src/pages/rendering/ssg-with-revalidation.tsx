import { GetStaticProps, NextPage } from "next";
import React from "react";

type SSGWithRevalidationPageProps = {
  renderedAt: string;
};

const SSGWithRevalidationPage: NextPage<SSGWithRevalidationPageProps> = ({
  renderedAt,
}) => {
  return <div>This page was rendered at {renderedAt}</div>;
};

export default SSGWithRevalidationPage;

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
    revalidate: 10,
  };
};

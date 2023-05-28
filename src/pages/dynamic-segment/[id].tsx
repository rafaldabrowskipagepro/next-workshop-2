import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";

const DynamicSegmentPage: NextPage<{ id: string }> = ({ id }) => {
  return <div>{id}</div>;
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params || {};

  return {
    props: {
      id,
    },
  };
};

export default DynamicSegmentPage;

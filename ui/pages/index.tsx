import React from "react";
import { NextPage } from "next";
import { withApollo } from "../lib/apollo";

interface InitialProps {
  greatting: string;
}

interface Props extends InitialProps {}

const IndexPage: NextPage<Props, InitialProps> = props => {
  return <div>{props.greatting}</div>;
};

IndexPage.getInitialProps = async () => {
  return {
    greatting: "Hello World!"
  };
};

export default withApollo(IndexPage);

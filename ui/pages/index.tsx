import React from "react";
import { NextPage } from "next";
import { withApollo } from "../lib/apollo";
import gql from "graphql-tag";
import { Query, useQuery } from "react-apollo";

interface InitialProps {
  greatting: string;
}

interface Props extends InitialProps {}

const tasksQuery = gql`
  query Tasks($status: TaskStatus) {
    tasks(status: $status) {
      id
      title
      status
    }
  }
`;

interface TasksQuery {
  tasks: {
    id: number;
    title: string;
    status: string;
  }[];
}

const IndexPage: NextPage<Props, InitialProps> = props => {
  const { loading, error, data } = useQuery(tasksQuery);

  if (loading) return <p>Loading ...</p>;
  else if (error) return <p>An error occur</p>;
  const tasks = data && data.tasks ? data.tasks : [];
  return (
    <ul>
      {tasks.map(task => {
        return <li key={task.id}>{task.title}</li>;
      })}
    </ul>
  );
};

IndexPage.getInitialProps = async () => {
  return {
    greatting: "Hello World!"
  };
};

export default withApollo(IndexPage);

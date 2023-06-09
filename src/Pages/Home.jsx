import React from "react";
import Container from "../components/container/Container";
import Header from "../components/header/Header";
import Body from "../components/body/Body";
import AddTodo from "../components/add_todo/AddTodo";
import Pending from "../components/pending/Pending";

export default function Home() {
  return (
    <Container>
      <Header />
      <AddTodo />
      <Body />
      <Pending />
    </Container>
  );
}

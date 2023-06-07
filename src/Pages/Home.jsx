import React from "react";
import Container from "../components/container/Container";
import Header from "../components/header/Header";
import Body from "../components/body/Body";
import AddTodo from "../components/add_todo/AddTodo";

export default function Home() {
  return (
    <Container>
      <Header />
      <AddTodo />
    </Container>
  );
}

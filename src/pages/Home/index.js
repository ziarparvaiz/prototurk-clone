import React from "react";
import "./Home.scss";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

function Home() {
  return (
    <>
      <Header />
      <main>
        <Sidebar />
      </main>
    </>
  );
}

export default Home;

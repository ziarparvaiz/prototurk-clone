import React from "react";
import "./Home.scss";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import ProgrammingLanguages from "./components/ProgrammingLanguages";
import TwitterCard from "./components/TwitterCard";
import InstagramCard from "./components/InstagramCard";

function Home() {
  return (
    <>
      <Header />
      <main>
        <Sidebar />
        <div className="content">
          <div className="content-inner">
            <h3>Add value to yourself!</h3>
            <p>
              A good career requires the right start. You are ready to make a
              right start with lessons on many languages and technologies at
              Prototürk!
            </p>
            <ProgrammingLanguages />
            <TwitterCard />
            <div className="hr-big"></div>
            <InstagramCard />
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;

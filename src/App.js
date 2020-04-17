import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";
import HomePage from "./components/HomePage";
import DriftPage from "./components/DriftPage";
import TimeAttackPage from "./components/TimeAttackPage";
import ForzaPage from "./components/ForzaPage";

const navList = [
  {
    name: "Главная",
    link: "/",
  },
  {
    name: "Дрифт-такси",
    link: "/drift",
  },
  {
    name: "Time Attack",
    link: "/timeattack",
  },
  {
    name: "Forza Karting",
    link: "/forza",
  },
];

export default function App() {
  return (
    <Router>
      <div>
        <Menu navList={navList} />
        <div className="page">
          <Route path="/" exact component={HomePage} />
          <Route path="/drift" component={DriftPage} />
          <Route path="/timeattack" component={TimeAttackPage} />
          <Route path="/forza" component={ForzaPage} />
        </div>
      </div>
    </Router>
  );
}

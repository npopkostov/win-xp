import React, { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import { AppProvider } from "./context/AppContext";
import Welcome from "./components/Welcome/Welcome";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [welcome, setWelcome] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    setTimeout(() => {
      setWelcome(false);
    }, 7000);
  }, []);
  return loading === true ? (
    <div className="flex items-center justify-center h-screen w-screen bg-black ">
      <img
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ba65667f-de75-42db-bfea-b9e04e9fcc6f/db6dw1k-47c4d90d-f5b5-4b31-a06e-2c2c0dc30501.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JhNjU2NjdmLWRlNzUtNDJkYi1iZmVhLWI5ZTA0ZTlmY2M2ZlwvZGI2ZHcxay00N2M0ZDkwZC1mNWI1LTRiMzEtYTA2ZS0yYzJjMGRjMzA1MDEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.VyIg-waBZOV6IJeAM1CvzHNFWsPl41G4wYFrdAXydvk"
        className="xl:w-full xl:h-full lg:w-full lg:h-fullmd:w-1/2 md:h-1/3 sm:w-1/2 sm:h-1/3"
      />
    </div>
  ) : welcome === true ? (
    <Welcome />
  ) : (
    <AppProvider>
      <HomePage />
    </AppProvider>
  );
};

export default App;

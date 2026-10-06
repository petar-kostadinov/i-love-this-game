import { Route, Routes } from "react-router";
import { useState } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Catalog from "./components/catalog/Catalog";
import GameDetails from "./components/game-details/GameDetails";
import GameCreate from "./components/game-create/GameCreate";
import Register from "./components/register/Register";

function App() {
  const [user, setUser] = useState(null);

  const userAuthHandler = (userData) => {
    setUser(userData);
  };

  return (
    <>
      <Header />

      {user && <p>Welcome, {user.email}!</p>}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/catalog"
          element={<Catalog />}
        />
        <Route
          path="/games/:gameId"
          element={<GameDetails />}
        />
        <Route
          path="/games/create"
          element={<GameCreate />}
        />
        <Route
          path="/register"
          element={
            <Register
              onRegister={userAuthHandler}
            />
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

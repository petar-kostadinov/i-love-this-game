import { Route, Routes } from "react-router";
import { useState } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Catalog from "./components/catalog/Catalog";
import GameDetails from "./components/game-details/GameDetails";
import GameEdit from "./components/game-edit/GameEdit";
import GameCreate from "./components/game-create/GameCreate";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Logout from "./components/logout/Logout";

function App() {
  const [user, setUser] = useState(null);

  const userAuthHandler = (userData) => {
    setUser(userData);
  };

  const logoutHandler = () => {
    setUser(null);
  }

  return (
    <>
      <Header isAuthenticated={!!user} />

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
          path="/games/:gameId/edit"
          element={<GameEdit />}
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
        <Route
          path="/login"
          element={<Login onLogin={userAuthHandler}/>}
        />
        <Route path="/logout" element={<Logout onLogout={logoutHandler} />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import Header from "../components/Header/Header.js";
import Login from "../user/login/Login";
import Signup from "../user/signup/Signup";
import Profile from "../user/profile/Profile";

const { Content } = Layout;

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Layout className="layout">
      <Content className="app-content">
        <div className="container">
          <Routes>
            <Route
              exact
              path="/login"
              element={
                <Login
                  currentUser={currentUser}
                  isAuthenticated={isAuthenticated}
                />
              }
            />
            <Route
              exact
              path="/signup"
              element={
                <Signup
                  currentUser={currentUser}
                  isAuthenticated={isAuthenticated}
                />
              }
            />
            <Route
              exact
              path="/profile"
              element={
                <Header>
                  <Profile currentUser={currentUser} />
                </Header>
              }
            />
            <Route
exact
path="/home"
element={
  <Header>
    <home currentUser={currentUser} />
  </Header>
}
/>
<Route
exact
path="/myFeeds"
element={
  <Header>
    <myFeeds currentUser={currentUser} />
  </Header>
}
/>
          </Routes>
        </div>
      </Content>
    </Layout>
  );
};

export default App;
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Profile from "../../User/Profile/Profile";
import Templates from "../../User/Templates/Templates";
import Update_Form from "../../User/UpdateForm/Update_Form";
import ContactUs from "../FirstPage/ContactUs";
import FirstPage from "../FirstPage/FirstPage";
import Test from "../LoginPage/Test";

function AppRouter() {
  const isLoogin = true;

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={isLoogin ? <Profile /> : <FirstPage />}
        />
        <Route
          exact
          path={isLoogin ? "/Update_Form" : "/Contact_Us"}
          element={isLoogin ? <Update_Form /> : <ContactUs />}
        />
        <Route
          exact
          path={isLoogin ? "/Create_Form" : "/Login_Register"}
          element={isLoogin ? <Templates /> : <Test />}
        />
      </Routes>
    </Router>
  );
}

export default AppRouter;

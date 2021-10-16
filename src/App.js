import React, { lazy, Suspense } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Loader from "./components/Loader";

const Home = lazy(() => import("./pages/home/Home.js"));
const Login = lazy(() => import("./pages/login/Login.js"));
const Signup = lazy(() => import("./pages/signup/Signup.js"));
const ForgotPassword = lazy(() =>
  import("./pages/ForgotPassword/ForgotPassword.js")
);
const Question = lazy(() => import("./pages/questions/Question.js"));
const AddQuestion = lazy(() => import("./pages/questions/AddQuestion.js"));
const MyQuestions = lazy(() => import("./pages/questions/MyQuestions.js"));
const MyAnswers = lazy(() => import("./pages/questions/MyAnswers.js"));
const Profile = lazy(() => import("./pages/profile/Profile.js"));
const Following = lazy(() => import("./pages/Follow/Following.js"));
const Followers = lazy(() => import("./pages/Follow/Followers.js"));
const InterestingQuestion = lazy(() =>
  import("./pages/questions/InterestingQuestion.js")
);
const Notifications = lazy(() =>
  import("./pages/Notifications/Notifications.js")
);
const Settings = lazy(() => import("./pages/settings/Settings.js"));

const App = () => {
  const PrivateRoute = ({ children, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("auth-token") ? children : <Redirect to="/login" />
      }
    />
  );
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path={`/`} exact>
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/forgot-password">
              <ForgotPassword />
            </Route>

            <Route exact path="/question">
              <Question />
            </Route>
            <PrivateRoute exact path="/my-questions">
              <MyQuestions />
            </PrivateRoute>

            <PrivateRoute exact path="/my-answers">
              <MyAnswers />
            </PrivateRoute>
            <PrivateRoute exact path="/add-question">
              <AddQuestion />
            </PrivateRoute>
            <Route exact path="/user">
              <Profile />
            </Route>
            <PrivateRoute exact path="/following">
              <Following />
            </PrivateRoute>
            <PrivateRoute exact path="/followers">
              <Followers />
            </PrivateRoute>
            <PrivateRoute exact path="/interesting-questions">
              <InterestingQuestion />
            </PrivateRoute>
            <PrivateRoute exact path="/notifications">
              <Notifications />
            </PrivateRoute>
            <PrivateRoute exact path="/settings">
              <Settings />
            </PrivateRoute>
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  );
};

export default App;

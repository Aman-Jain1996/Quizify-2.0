import { Route, Routes } from "react-router";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import {
  Category,
  Home,
  LeaderBoard,
  Login,
  Navigation,
  PrivateRoute,
  Profile,
  Result,
  Rules,
  SignUp,
  Loader,
  Details,
  ScoreCard,
} from "components";
import { useAuth } from "contexts";

function App() {
  const { showLoader } = useAuth();
  return (
    <div className="App">
      {showLoader && <Loader />}
      <ToastContainer
        style={{ fontSize: "1.6rem" }}
        position="bottom-right"
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        theme="colored"
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route
          path="/categories"
          element={
            <PrivateRoute>
              <Category />
            </PrivateRoute>
          }
        />
        <Route
          path="/quiz/:quizId"
          element={
            <PrivateRoute>
              <Rules />
            </PrivateRoute>
          }
        />
        <Route
          path="/results"
          element={
            <PrivateRoute>
              <Result />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        >
          <Route path="details" element={<Details />} />
          <Route path="scores" element={<ScoreCard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

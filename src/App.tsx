import { Login } from "components/auth/Login";
import { SignUp } from "components/auth/SignUp";
import { Navigation } from "components/common/Navigation";
import { Category } from "components/home/Category";
import { Home } from "components/home/Home";
import { LeaderBoard } from "components/leaderboard/LeaderBoard";
import { Question } from "components/quiz/Question";
import { Result } from "components/quiz/Result";
import { Rules } from "components/quiz/Rules";
import { Route, Routes } from "react-router";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/quiz" element={<Question />} />
        <Route path="/result" element={<Result />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
      </Routes>
    </div>
  );
}

export default App;

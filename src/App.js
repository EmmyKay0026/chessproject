import "./App.css";
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom'
import { LandingPage,LiveGames,News,Play,Puzzles,SignIn,SignUp } from "./component/pages";

function App() {
  const ProtectedRoute = ({ redirectPath = "/signin", children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path ='/' element ={<LandingPage />}/>
        <Route exact path ='/livegames' element ={<LiveGames />}/>
        <Route exact path ='/news' element ={ <ProtectedRoute><News /></ProtectedRoute>}/>
        <Route exact path ='/play' element ={<Play />}/>
        <Route exact path ='/puzzles' element ={<Puzzles />}/>
        <Route exact path ='/signin' element ={<SignIn />}/>
        <Route exact path ='/signup' element ={<SignUp />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

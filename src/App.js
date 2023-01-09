import "./App.css";
import { Route, Routes, BrowserRouter} from "react-router-dom"
import { LandingPage, LiveGames, News, Play, Puzzles } from "./component/pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path ='/' element ={<LandingPage />}/>
        <Route exact path ='/livegames' element ={<LiveGames />}/>
        <Route exact path ='/news' element ={<News />}/>
        <Route exact path ='/play' element ={<Play />}/>
        <Route exact path ='/puzzles' element ={<Puzzles />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

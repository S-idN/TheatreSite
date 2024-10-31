import { HashRouter as Router, Routes, Route } from "react-router-dom";
import {HomePage} from "./Pages/HomePage";
import { LoginPage } from "./Pages/LoginPage";
import { Test } from "./Pages/Test";

export default function App() {

    return(
      <>
        <Router>
          <Routes>
            <Route path="test" element={<Test/>}/>
            <Route path="login" element={<LoginPage/>}/>
            <Route path="" element={<HomePage/>} />
          </Routes>
        </Router>
      </>
    )
}

import React,{useContext} from 'react';
import { states } from './context';
import {TopBar,Loader} from "./components";
import Home from "./pages/Home/Home";
import Single from "./pages/Single/Single";
import Write from "./pages/Write/Write";
import Settings from "./pages/Settings/Settings";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import About from './pages/About/About';

import {Routes, Route} from 'react-router-dom'

function App() {
  const {user,isLoading} = useContext(states);

  return (
    <div className="App">
      {isLoading && <Loader/>}

      <TopBar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/register" exact element={user ? <Home/> : <Register/>}/>'
        <Route path="/login" element={<Login/>}/>
        <Route path="/write" element={user ? <Write/> : <Register/>}/>
        <Route path="/settings" element={user ? <Settings/> : <Register/>}/>
        <Route path="/post/:postId" element={<Single/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;

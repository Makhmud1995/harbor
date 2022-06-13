import React from "react";
import Navbar from './components/home/Navbar'
import Content from './components/home/Content'
import Wrapper from './components/home/wrapper'
import Wrapper2 from "./components/home/wrapper2";
import Wrapper3 from "./components/home/wrapper3";

function App() {
  return (
    <div className="flex flex-col w-full bg-[#F9F7F4]">
  <Navbar/>
  <Content/>
  <Wrapper/>
  <Wrapper2/>
  <Wrapper3/>
    </div>
  );
}

export default App;

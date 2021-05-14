
import React from 'react'
import MainVideo from "./components/MainVideo";
import TableGamer from './components/TabletGamer';
import TabletImg from './components/TabletImg';
import YoutubeVideo from './components/YoutubeVideo';
import Image360 from './components/Image360'
import Features from './components/Features';


function App() {
  return (
    <div className="App">
     <MainVideo/>
     <YoutubeVideo/>
     <Image360/>
     <TabletImg/>
     <TableGamer/>
     <Features/>
    </div>
  );
}

export default App;

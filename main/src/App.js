import './App.css';
import { useState } from 'react'
import Sidebar from './Sidebar'
import ChannelBar from './ChannelBar';
import ContentContainer from './ContentContainer'
function App() {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <ChannelBar></ChannelBar>
      <ContentContainer></ContentContainer>
    </div>
  );
}

export default App;

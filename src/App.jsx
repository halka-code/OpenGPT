import React, { useState } from 'react';
import SideBar from './Components/SideBar';
import Chat from './Components/Chat';
import { createContext } from 'react';

// const [light, setLight] = useState(0);
// export const handelLight = createContext(light);
const App = () => {
  // const [light, setLight] = useState(false); 


  return (
    // <handelLight.Provider value={light} >
      <div className='grid grid-cols-5 '>
        <aside className='col-span-1'>
          <SideBar />
        </aside>
        <div className="col-span-4 border">
          <Chat />
        </div>
      </div>
    // </handelLight.Provider>
  );
};

export default App;
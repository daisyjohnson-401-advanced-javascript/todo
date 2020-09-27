// Create a context for managing application settings and provide this at the application level
// You may manually set (hard code) those state settings in the context provider during development

import React, { useState } from 'react';

export const Context = React.createContext();

function Settings(props) {

// Number of items to display per screen (number)
const [numberVisible, setNumberVisible] = useState(3);
  // Display or Hide completed items (boolean)
const [showCompleted, setShowCompleted] = useState(true);
// Sort the items based on any of the keys (i.e. difficulty)
const [sortByDiff, setSortByDiff] = useState('difficulty');

const state = {
  numberVisible,
  setNumberVisible,
  showCompleted,
  setShowCompleted,
  sortByDiff,
  setSortByDiff,
}

return ( 
<Context.Provider value={ state }>
  {props.children}
</Context.Provider>
  );
}

export default Settings;
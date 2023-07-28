/* eslint-disable import/no-anonymous-default-export */
import React, {useState} from "react";
import DarkModeToggle from "react-dark-mode-toggle";


export default () => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  React.useEffect(() => {
    const body = document.body
    
    if( setIsDarkMode === true ) {
      body.classList.add('dark-mode')
      
    } else {
      body.classList.remove('dark-mode')
     
    }
  }, [setIsDarkMode])



  return (
    <DarkModeToggle
      onChange={setIsDarkMode}
      checked={isDarkMode}
      size={50}
    />
  );
};


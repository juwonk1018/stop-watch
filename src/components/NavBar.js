import React from 'react';
import './NavBar.css';



export default function NavBar({darkMode, setDarkMode}) {
  return (
    <div className = "navBar">
        <button onClick = {
            setDarkMode(!darkMode);
            console.log(darkMode);
            }>
            다크모드
        </button>
    </div>
  )
}

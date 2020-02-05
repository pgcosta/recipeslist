import React from 'react';
import './TopBar.css'
import { Link } from 'react-router-dom'

// Navigation top bar
export default function TopBar() {
  
  return (
    <div className="topnav">
        <Link to="/">Recipes List</Link>
    </div>
  );
}
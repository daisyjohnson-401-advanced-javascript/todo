import React from 'react';

import ToDo from './components/todo/todo.js';

import SettingsProvider from './context/settings';

import 'bootstrap/dist/css/bootstrap.min.css';



export default function App() {
    return (
      <>
      <SettingsProvider>
        <ToDo />
        </SettingsProvider>
      </>
    );
  }


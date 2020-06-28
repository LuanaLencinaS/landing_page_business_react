import React from 'react';
//importação da biblioteca react

import 'react-toastify/dist/ReactToastify.css';
import "./global.css"
//esse css sobrescreve o do componente

// importo o arquivo routes que criei
import Routes from "./Routes";

export default function App() {
  return <Routes/>;
}
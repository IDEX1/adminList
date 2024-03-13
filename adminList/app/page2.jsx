'use client'
import React, {  useEffect} from "react";
//import {BrowserRouter,Routes,Route} from 'react-router-dom'
import axios from 'axios'
//import Page from "./page.jsx"
function app() {
    useEffect(()=>{
        axios.get('http://localhost:8081/')
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    })
  return (
    <div>
        hello

    </div>
  )
}

export default app
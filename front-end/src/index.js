import React from "react"
import ReactDom from "react-dom/client"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './styles/style.css'
import App from "./app";

ReactDom.createRoot(document.getElementById('root')).render(<App />)
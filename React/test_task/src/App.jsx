import './App.css'
import {useEffect} from "react";
import {useAppDispatch} from "./context/AppContext.jsx";
import {Content} from "./components/Content.jsx";

function App() {
    const dispatch = useAppDispatch();
    useEffect(initializeAppDate, []);

    return(
        <>
            <Content/>
        </>
    )

    function initializeAppDate() {
        fetchInitData().then(data => dispatch({type: 'setSiteData', data}))
    }

    function fetchInitData() {
        const initUrl = 'http://localhost:8000/images/test';
        return fetch(initUrl).then(response => response.ok && response.json())
    }
}

export default App

import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [users, setUsers] = useState([])
    const [ping, setPing] = useState('')
useEffect(() => {
    fetch('/api/')
        .then(value => value.json())
        .then(value => {
            setUsers(value)
        })
}, [])

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    {
                        users && JSON.stringify(users)
                    }
                </p>
                <p
                    className="App-link"
                    onClick={ () =>   fetch('/api/ping')
                        .then(value => value.json())
                        .then(value => {
                            setPing(value)
                        })}
                >
                    {ping && ping}
                </p>
            </header>
        </div>
    );
}

export default App;

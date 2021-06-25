import React from 'react';
import {Provider} from "react-redux";
import './App.css';
import TaskList from "./components/TaskList";
import store from './lib/redux';

function App() {
    return (
        <Provider store={store}>
            <TaskList/>
        </Provider>
    );
}

export default App;

import React from 'react';
import './App.css';
import {TodoList} from "./components/TodoList";

function App() {

    const data1 = [
        {id: 1, name: 'John', age: 45, isMarried: true},
        {id: 2, name: 'Oleg', age: 23, isMarried: true},
        {id: 3, name: 'Stiven', age: 32, isMarried: false},
        {id: 3, name: 'Bob', age: 55, isMarried: true},
    ]

    const data2 = [
        {id: 1, name: 'John', age: 45, isMarried: true},
        {id: 2, name: 'Oleg', age: 23, isMarried: false},
        {id: 3, name: 'Stiven', age: 32, isMarried: true},
    ]

    return (
        <div className="App">
            <TodoList title={'Холостяки Парижа'} data={data1}/>
            <TodoList title={'Холостяки Лондона'} data={data2}/>
        </div>
    );
}

export default App;

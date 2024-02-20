import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './one/App';
import { store } from './app/store'
import { Provider } from 'react-redux'
import Router from './two/router';
import {BrowserRouter, MemoryRouter } from 'react-router-dom';
import Counter from './one/counter';
import Task1 from './project/task1';
import Task2 from './project/task2';
import Task3 from './project/task3';
import Task4 from './project/task4';
import Task5 from './project/task5';
import Task6 from './project/task6';
import Task7 from './project/task7';
import Task8 from './project/task8';
import Width from './project/width';
import MyComponent from './project/mycomponent';
import Context from './project/context';
import Game1 from './three/quiz';
import Game2 from './three/fetch';
import Game3 from './three/fetchs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

   {/* <Provider store={store}>
    <App />
    </Provider>   */}

    {/* <MemoryRouter>
      <Router/>
    </MemoryRouter> */}

    {/* <Counter/> */}

    {/* <Task1/>
    <Task2/> */}

    {/* <Task3/> */}

    {/* <Task4/>
    <Task5/> */}

    {/* <Task6/> */}


    {/* <Task7/> */}
    
    {/* <Task8/> */}
    
    {/* <Width/> */}

    {/* <MyComponent/> */}

    {/* <Context/> */}

    {/* <Game1/> */}

    {/* <Game2/> */}

    <Game3/>
    


  </React.StrictMode>
);
reportWebVitals();

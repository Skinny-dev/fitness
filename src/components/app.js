import React from 'react'
import Exercises from '../pages/exercises'
import ExercisesNew from '../pages/exercisesNew'
import NotFound from '../pages/notFound'

import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

/*
function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/exercise" component={Exercises}/>
                <Route exact path="/exercise/new" component={ExercisesNew}/>
                <Route component={NotFound}/>
            </Switch>
        </Router>
    )
}*/

const App = () =>(
    <Router>
        <Switch>
            <Route exact path="/exercise" component={Exercises}/>
            <Route exact path="/exercise/new" component={ExercisesNew}/>
            <Route component={NotFound}/>
        </Switch>
    </Router>
)
export default App
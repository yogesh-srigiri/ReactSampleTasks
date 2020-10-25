import React from 'react';
import { Route, Link } from 'react-router-dom';
import TaskOne from './tasks/task1/task1';
import TaskTwo from './tasks/task2/task2';
import TaskThree from './tasks/task3/task3';
import TaskFour from './tasks/task4/task4';


const Header = props => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand">Tasks</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Task1 </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/two">Task2</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/three">Task3</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/four">Task4</Link>
                        </li>


                    </ul>
                </div>
            </nav>
            <Route path="/" component={TaskOne} exact />
            <Route path="/two" component={TaskTwo} />
            <Route path="/three" component={TaskThree} />
            <Route path='/four' component={TaskFour} />

        </div>
    )
}

export default Header;
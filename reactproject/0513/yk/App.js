import React from "react";
import {Switch, Link, Route} from 'react-router-dom';
import About from "./About";
import Home from "./Home";
import Profiles from "./Profiles";
import HistorySample from "./HistorySample";


const App = () => {
    return (
        <div>
            <ul>
                <li className="home">
                    <Link to="/">홈</Link>

                </li>

                <li className="introduce">
                    <Link to="/about">소개</Link>
                </li>

                <li className="profile list">
                    <Link to="/profiles">프로필 목록</Link>
                </li>

                <li className="history sample">
                    <Link to="/history">예제</Link>
                </li>


            </ul>

            <hr/>
            <Switch>
                <Route path="/" exact={true} component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/profiles" component={Profiles}></Route>
                <Route path="/history" component={HistorySample}></Route>
                <Route render={({location}) => (
                    <div>
                        <h2>페이지가 존재하지 않습니다.</h2>
                        <p>{location.pathname}</p>
                    </div>
                )}
                />
            </Switch>
        </div>
    );
};

export default App;

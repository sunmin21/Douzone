import React from "react";
import {NavLink, Route} from 'react-router-dom';
import Profile from "./Profile";
import WithRouterSample from "./WithRouterSample";

const Profiles = () =>{
    const activeStyle={
        background:'green',
        color:'white'
    };
    return(
        <div>
            <h3>User list:</h3>
            <ul>
                <li>
                    <NavLink to ="/profiles" activeStyle={activeStyle}>yeonkyu</NavLink>
                </li>
                <li>
                    <NavLink to ="/profiles"  activeStyle={{background: 'black', color:'white'}}>gildong</NavLink>
                </li>
            </ul>

            <Route path="/profiles" exact render={() => <div>select user</div>}>

            </Route>

            <Route path = "/profiles/:username" component = {Profile}></Route>
            {/*<WithRouterSample />*/}

        </div>
    );
};

export default Profiles;
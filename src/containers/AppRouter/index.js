import React from "react";
import {
    BrowserRouter as Router,
    Routes ,
    Route,
} from "react-router-dom";
import styled from "styled-components";

//component
import SignIn from '../SignIn';
import TopMenu from './TopMenu';
import LogIn from '../LogIn';
const AppRouter = ({ className }) => {
    return (
        <Router styled={{witdh:"100%"}}>
            <TopMenu  />
            <div className={className}>
                <Routes>
                    <Route path="/sign-in" element={<SignIn />}/>
                    <Route path="/log-in" element={<LogIn />} />
                </Routes>
            </div>
        </Router>
    )
}
export default styled(AppRouter)`
`
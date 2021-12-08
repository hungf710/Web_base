import PropTypes from "prop-types";
import React, { memo } from "react";
import { Layout } from 'antd';
import styled from "styled-components";
import { FacebookOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';
const TopMenu = memo(
    ({ className }) => {
        return (
            <div className={className}>
                <header>
                    <a className="brand" href>Travel</a>
                    <div className="navigation">
                        <div className="navigation-items">
                            <a href>Home</a>
                            <a href>About</a>
                            <a href="/log_in">Contact</a>
                            <a href="/sign_in">LogIn</a>
                            <a href>FAQ</a>
                        </div>
                    </div>
                </header>
                
            </div>
        );
    }
);
TopMenu.propTypes = {
    className: PropTypes.any.isRequired,
};
export default styled(TopMenu)`
.brand{
    color: #000;
    font-size: 1.5em;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration:none;
}
.navigation{
    position: relative;
}
.navigation-items a{
    position: relative;
    color:#000 ;
    font-size: 1em;
    font-weight: 500;
    margin-left: 30px;
    transition: 0.3 ease;
    text-decoration:none
}
.navigation-items a::before{
    content: "";
    position: absolute;
    width: 0%;
    height: 3px;
    background:#000;
    bottom: 0;
    left: 0;
    transition: 0.3s ease;
}
.navigation-items a:hover::before {
    width: 100%;
}
`;


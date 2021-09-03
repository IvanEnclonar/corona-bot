import React from 'react';
import "./FrontPage.css";
import { Link } from 'react-router-dom';

function FrontPage() {
    return(
        <div className="FP__Body">
            <img src="https://storage.googleapis.com/corona-bot/1.png" className="FP__Image"></img>
            <div className="FP__MainText">
                <h1 className="FP__HeadText">CoronaBot</h1>
                <h3 className="FP__SubText">by Ingenuity</h3>
            </div>
            <Link to="/Chat" className="FP__Link FP__ProceedLink">
                <div className="FP__Proceed">Proceed to CoronaBot</div>
            </Link>
        </div>
    );
}

export default FrontPage;
import React from 'react';
import logo from '../assets/img/logos/topolar-logo.svg';
import '../assets/css/TextbookPage.css'
import '../assets/css/Theme.css'
//import { API_URL, API_PROTOCOL } from '../../config';
import reactHtmlParser from 'react-html-parser';

//const URL = API_PROTOCOL + API_URL;
//import '../../assets/css/TextbookPage.css';

class TextbookHeader extends React.Component {
    render() {
        const {title, level, language, stage, summary} = this.props;

        return (
            <div >
                <br />
                <img src={logo} className="logo-s" alt="profile"></img>
                <br />
                <br />
                <h5 > DON'T LEARN TO CODE, LEARN TO THINK </h5>
                <br />
                <h2 > {title} </h2>
                <h5 > {stage}   |  {language}   |   CONCEPT   |   LV.{level} </h5>
                <br />
               
                <br /> <br /> <br />
                <div className="summary">
                    <b style={{fontSize:"20px",verticalAlign:"middle"}}> {reactHtmlParser(summary.summary_text)} </b>
                </div>

            </div>
        )
    }

}

export default TextbookHeader;
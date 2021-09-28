import React from 'react';
import {Toast, ToastHeader, ToastBody, Collapse} from 'reactstrap';
import '../assets/css/TextbookPage.css'
import '../assets/css/Theme.css'

class ToastStep extends React.Component {

    render() {
        const status = true;
        const {title, img, step } = this.props;
        return (
            <div>
                <Toast className="tempToastSize"> 
                    <ToastHeader style={{backgroundColor:"#61bfad"}}>
                        <strong className="mr-auto" > Step.{step} </strong>
                    </ToastHeader>
                    <Collapse isOpen={status}>
                        <ToastBody>
                            {img?<img width="72%" height="54%" src={img} alt="profile"></img>:null}
                            <br></br>
                            <br></br>
                            <strong style={{fontSize:"calc(3px + 1vmin)"}}> {title} </strong>
                        </ToastBody>
                    </Collapse>

                </Toast>
            </div>
        )
    }
}

export default ToastStep;
import React from 'react';
// import ReactDOM from 'react-dom';

import Title from './Title'
import Timer from './Timer';
import Controler from './Controler';
import './style.css'

class Main extends React.Component {
    constructor(){
        super();
        this.state = {
            title: `Click the start button to start the timer.`
            // The timer is counting ...
            // The timer has stopped!
            // The timer is reset.
        }
    }

    render() {
        return (
            <div className='main'>
                <h1>Hello friends</h1>
                <h2>This is a great timer!</h2>
                <Title title = {this.state.title}/>
                <Timer title = {this.state.title}/>
                <Controler/>
            </div>
        )
    }
}

export default Main;
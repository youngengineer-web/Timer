import React from 'react';
// import ReactDOM from 'react-dom';
import './style.css'
import Timer from './Timer';

let obj = new Timer();

class Controler extends React.Component{
    render(){
        return(
            <div className='btn'>
                <span className='btnStart' onClick={obj.startInterval}>Start</span>
                <span className='btnStop' onClick={obj.stopInterval}>Stop</span>
                <span className='btnReset' onClick={obj.resetInterval}>Reset</span>
            </div>
        )
    }
}

export default Controler;
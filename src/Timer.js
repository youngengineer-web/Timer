import React from 'react';
// import ReactDOM from 'react-dom';

var interval;

class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            second: 0,
            minute: 0,
            hour: 0,
            isStart: false
        }
    }

    componentDidMount() {
        this.startInterval();
    }

    startInterval = () => {
        if (this.state.isStart == false) {
            this.setState({
                isStart: true
            })
            interval = setInterval(() => {
                this.setState({
                    second: this.state.second + 1
                })
                if (this.state.second == 60) {
                    this.setState({
                        second: 0,
                        minute: this.state.minute + 1
                    })
                }
                if (this.state.minute == 60) {
                    this.setState({
                        minute: 0,
                        hour: this.state.hour + 1
                    })
                }
            }, 1000);
        }
    }

    stopInterval = () => {
        clearInterval(interval);
        this.setState({
            isStart: true,
        })
    }

    resetInterval = () => {
        this.stopInterval();
        this.setState({
            second: 0,
            minute: 0,
            hour: 0
        })
    }

    render() {
        let h = this.state.hour;
        let m = this.state.minute;
        let s = this.state.second;

        return (
            <div className='timer'>
                <h1> {`${h > 9 ? h : "0" + h} : ${m > 9 ? m : "0" + m} : ${s > 9 ? s : "0" + s}`} </h1>
            </div>
        )
    }
}

export default Timer;
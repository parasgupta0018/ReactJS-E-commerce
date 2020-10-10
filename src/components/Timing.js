import React, { Component } from 'react'
import './timing.css'
import './bootstrap.css'

class Timing extends Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
             day:0,
             hour:0,
             minute:0,
             second:0
        };
    }
    
    render() {
        
        const countdown = new Date("August 15, 2019 12:00:00").getTime();

        setInterval(function() {
            
            var currentDate = new Date().getTime();
            var difference = countdown-currentDate; 
            
            var days = Math.floor(difference / (1000 * 60 * 60 * 24));
            days = (days < 10)?("0"+days):days;
            var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            hours = (hours < 10)?("0"+hours):hours;
            var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            minutes = (minutes < 10)?("0"+minutes):minutes;
            var seconds = Math.floor((difference % (1000 * 60)) / 1000);
            seconds = (seconds < 10)?("0"+seconds):seconds;

            updateTime(days,hours,minutes,seconds);
            
        },1000);

        const updateTime = (days, hours, minutes, seconds) => {
            this.setState({
                 day: days,
                 hour: hours,
                 minute: minutes,
                 second: seconds
            })    
        }


        return (
            <div>
                <div className="d-inline-flex"><h3>FLASH SALE STARTS : </h3></div>
                <div className="bg-dark text-white p-3 d-flex flex-column d-inline-flex">
                    <h2 className="mb-0 p-0 d-inline-flex">
                        <pre className="text-white">{this.state.day} : {this.state.hour} : {this.state.minute} : {this.state.second}</pre>
                    </h2>
                    <div className="d-flex mt-0 p-0 d-inline-flex align-items-center">
                        <div className="timedigit mr-5">Days</div>
                        <div className="timedigit mr-5">Hrs</div>
                        <div className="timedigit mr-5">Mins</div>
                        <div className="timedigit">Secs</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Timing



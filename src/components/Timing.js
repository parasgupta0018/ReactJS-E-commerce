import React, { Component } from 'react'
import './timing.css'
import './bootstrap.css'

class Timing extends Component {
    
  
    render() {
        
        const countdown = new Date("August 15, 2019 12:00:00").getTime();

        setInterval(function() {
            
            var currentDate = new Date().getTime();
            var difference = countdown-currentDate; 
            
          

            updateTime(days,hours,minutes,seconds);
            
        },1000);


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



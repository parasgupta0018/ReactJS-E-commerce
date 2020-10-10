import React, { Component } from 'react'
import Specs from './Specs'
import { homedir } from 'os';

class Jumbotron extends Component {
    render() {

        const speclist = [
            {
                id:0,
                spec:"Hello! I am Paras Gupta",
                desc:"Developer of this website",
                src:1 
            },
            {
                id:1,
                spec:"REDMI K20 PRO",
                desc:"Flame Red, 128 GB ROM, 6 GB RAM at ₹27,999",
                src:0 
            },
            {
                id:2,
                spec:"PROCESSOR",
                desc:"Powered by the Qualcomm 855 processor, Adreno 640 GPU, and 8 GB of RAM, the Redmi K20 Pro offers incredible power and efficiency in all your daily tasks. It also comes with 256 GB of ROM to store all your pictures, videos, and other files.",
                src:2

            },
            {
                id:3,
                spec:"Game Turbo 2.0",
                desc:"With reduced network delay and optimised touch latency, this feature provides you with a fluid and seamless mobile gaming experience.",
                src:3 
            },
            {
                id:4,
                spec:"48 MP AI Triple Rear Camera",
                desc:"The Redmi K20 Pro features a 48 MP Sony IMX586 high-resolution sensor, a 13 MP 124.8° wide-angle camera, and an 8 MP telephoto camera which work together to capture every moment in crystal-clear detail. It also comes with 960 fps HD slo-mo recording using which you can slow down and enjoy every detail.",
                src:4 
            },
            {
                id:5,
                spec:"20 MP Pop-up Camera",
                desc:"The Redmi K20 Pro comes with a 20 MP pop-up selfie camera which makes the already-beautiful display bigger and better.",
                src:5 
            },
            {
                id:6,
                spec:"Horizon AMOLED Display",
                desc:"Whether you’re watching videos or playing games, enjoy a stunning visual experience with the Redmi K20 Pro which comes with a 16.23-cm (6.39) AMOLED Display, 91.9% screen-to-body ratio, HDR range and a 100 DCI-P3 colour gamut.",
                src:6 
            },
            {
                id:7,
                spec:"Long-lasting Battery",
                desc:"It comes with a 4000 mAh high-capacity battery, so you don’t have to worry about your phone running out of charge. It also supports 18 W fast charging, so you can spend more time using the phone and less time charging it.",
                src:7 
            },
            {
                id:8,
                spec:"In-Display Fingerprint Sensor",
                desc:"Featuring the 7th generation in-display fingerprint sensor, the Redmi K20 Pro can be unlocked easily in a jiffy.",
                src:8 
            }

        ]

        const specs = speclist.map(speclist => <Specs key={speclist.id} spec={speclist.spec} desc={speclist.desc} src={speclist.src}/>)

        return (
            <div> {specs}</div>

        )
    }
}

export default Jumbotron

import React, { Component } from 'react'
import './bootstrap.css'
import jumbo0 from '../images/jumbo0.png'
import jumbo1 from '../images/jumbo1.jpg'
import jumbo2 from '../images/jumbo2.png'
import jumbo3 from '../images/jumbo3.png'
import jumbo4 from '../images/jumbo4.png'
import jumbo5 from '../images/jumbo5.png'
import jumbo6 from '../images/jumbo6.png'
import jumbo7 from '../images/jumbo7.png'
import jumbo8 from '../images/jumbo8.png'
import './jumbotron.css'

class Specs extends Component {
    render() {
        const jumbos = [jumbo0,jumbo1,jumbo2,jumbo3,jumbo4,jumbo5,jumbo6,jumbo7,jumbo8]
        const {spec,desc,src} = this.props
        
        return (
            
            <div className='jumbotron img-jumbo mb-2' style={{backgroundImage:"url(" + jumbos[src] +  ")"}}>
                <h1 className="text-white" >{spec}</h1>
                <p className="text-white">{desc}</p>
            </div>
            
        )
    }
}

export default Specs

import React, { Component } from 'react'
import './footer.css'

class Footlist extends Component {
    render() {
        const {detail} = this.props
        return (
            <li className="footerItem">
                <a href="" className="footItem">
                    {detail}
                </a>
            </li>
        )
    }
}

export default Footlist

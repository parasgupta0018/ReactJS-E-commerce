import React, { Component } from 'react'
import './bootstrap.css'
import './footer.css'
import footimg from './../images/download.png'
import Footlist from './Footlist'

class Footer extends Component {
    render() {
        const about =[{id:1, detail:'contact us'},{id:2, detail:'reach us'},{id:3, detail:'info'},{id:4, detail:'help center'}]
        const help=[{id:1, detail:'payment'},{id:2, detail:'cancellation and refund'},{id:3, detail:'infringement'},{id:4, detail:'FAQ'}]
        const policy = [{id:1, detail:'return policy'},{id:2, detail:'Terms of Use'},{id:3, detail:'Security'},{id:4, detail:'privacy'}]
        const more=[{id:1, detail:'Mail'},{id:2, detail:'Blog'},{id:3, detail:'Acknowledgement'},{id:4, detail:'Complaince'}]

        const aboutList = about.map(about => <Footlist key={about.id} detail={about.detail}/>)
        const helpList = help.map(about => <Footlist key={about.id} detail={about.detail}/>)
        const policyList = policy.map(about => <Footlist key={about.id} detail={about.detail}/>)
        const moreList = more.map(about => <Footlist key={about.id} detail={about.detail}/>)

        return (
            <div className="container-fluid p-3 pl-5 bg-dark d-flex">
                <div>
                    <img src={footimg} className="footimg"/>
                    <p className="text-white">Copyright © 2019 Paras18 Inc.</p>
                    <a href="#" className="fa fa-facebook mr-2"></a>
                    <a href="#" className="fa fa-twitter mr-2"></a>
                    <a href="#" className="fa fa-linkedin mr-2"></a>
                    <a href="#" className="fa fa-youtube mr-2"></a>
                    <a href="#" className="fa fa-instagram mr-2"></a>
                </div>
                <div className="p-3 ml-2">
                    
                    <ul className="footlist">
                    <h6 className="text-light">ABOUT</h6>
                        {aboutList}
                    </ul>
                </div>
                <div className="p-3 ml-2">
                    
                    <ul className="footlist">
                    <h6 className="text-light">HELP</h6>
                        {helpList}
                    </ul>
                </div>
                <div className="p-3 ml-2">
                   
                    <ul className="footlist">
                    <h6 className="text-light">POLICY</h6>
                        {policyList}
                    </ul>
                </div>
                <div className="p-3 ml-2">
                    
                    <ul className="footlist">
                    <h6 className="text-light">MORE</h6>
                        {moreList}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer

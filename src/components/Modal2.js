import React, { Component } from 'react'
import Form2 from './Form2'
import './bootstrap.css'

class Modal extends Component {
    render() {
        return (
            <div className="modal" id="modal2">
                <div className="modal-dialog">
                    <div className="modal-content bg-light">

                        <div className="modal-header">
                            <h2 className="text-primary text-center">SIGN IN</h2>
                            <button className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <Form2 />
                        </div>

                        {/* <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">SignUp</button>
                        </div> */}
                        
                    </div>

                </div>
                
            </div>
        )
    }
}

export default Modal

import React, { Component } from 'react'
import './bootstrap.css'

class Form extends Component {
    render() {

        (function() {
            'use strict';
            window.addEventListener('load', function() {
              // Get the forms we want to add validation styles to
              var forms = document.getElementsByClassName('needs-validation');
              // Loop over them and prevent submission
              var validation = Array.prototype.filter.call(forms, function(form) {
                form.addEventListener('submit', function(event) {
                  if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                  }
                  form.classList.add('was-validated');
                }, false);
              });
            }, false);
          })();

        return (
            <div>
                <form className="needs-validation" novalidate>

                    {/* <div  className="form-group row">
                       
                       <div className="col-xl-6 col-lg-6 col-md -12 form-group ">
                            <input type="text" id="firstname" placeholder="First Name" className="form-control" />
                            <div className="valid-feedback">Valid.</div>
                            <div className="invalid-feedback">Please fill out this field.</div>
                       </div>
                       
                       <div className="col-xl-6 col-lg-6 col-md -12 form-group">
                            <input type="text" id="Lastname" placeholder="Last Name" className="form-control" />
                            <div className="valid-feedback">Valid.</div>
                            <div className="invalid-feedback">Please fill out this field.</div>
                       </div>
                       
                    </div> */}
                    
                    
                           
                    <div className="form-group">
                       <input type="email"  id="Email" placeholder="Email" className="form-control" />   
                       <div className="valid-feedback">Valid.</div>
                       <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                       
                    <div className="form-group">
                       <input type="number" className="form-control" placeholder="Phone Number" max="9999999999" min="1000000000" onInvalid = "this.setCustomValidity(this.willValidate?'':'Phone Number should be 10 Digits long')" />
                       <div className="valid-feedback">Valid.</div>
                       <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                    
                    <div className="form-group">
                        <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" required />
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please fill out this field.</div>
                    </div><br />

                    <button type="submit" className="btn btn-success container">Sign IN</button>
                </form>
            </div>
        )
    }
}

export default Form

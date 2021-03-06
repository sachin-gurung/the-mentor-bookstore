import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FooterComponent = (props) => {
  return (
    <div className="main-footer" class="bg-success pt-5">
      <div className="container">
        <div className="row">
            <div className="col">
                <h4>The Mentor Bookstore</h4>
                <ul className="list-unstyled">
                    <li>1111 Charlie Brown Street</li>
                    <li>Suite 2B</li>
                    <li>Seattle, WA</li>                    
                </ul>
            </div>
            <div className="col">
                <h4>Services</h4>
                <ul className="list-unstyled">
                    <li>Buy Your Books</li>
                    <li>Find Books</li>
                    <li>Request Books</li>    
                    <li>Customer Support</li>                 
                </ul>
            </div>    
            <div className="col">
                <h4>Connect with us</h4>
                <ul className="list-unstyled">
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>    
                    <li>Youtube</li>                 
                </ul>                
            </div>         
        </div>
      </div>
      <hr />
      <div className="row">
        <p className="col-sm">
            &copy;{new Date().getFullYear()} THE MENTOR BOOKSTORE | All right reserved | Terms of Service | Privacy
        </p>
      </div>
    </div>
  );
};

export default FooterComponent;

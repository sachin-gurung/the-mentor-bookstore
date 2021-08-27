import React from "react";
import { Jumbotron, Button } from "reactstrap";

const HeaderComponent = (props) => {
  return (
    <div>
      <Jumbotron className="jumbotron">
        
        <h1 className="display-1 text-center">THE MENTOR BOOKSTORE</h1>
        <p className="display-4 text-center">
          All about books!!
        </p>
        <hr className="my-2" />
        <p>
          Don't find the book you're looking for? Click below.
        </p>
        <p className="lead">
          <Button color="primary">Order Book</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default HeaderComponent;

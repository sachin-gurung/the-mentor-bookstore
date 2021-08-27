import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import metadataService from '../services/metadataService';

const BodyComponent = (props) => {
    return(
        <div>
            <br/>
            <h1> List of Books</h1>
            <br/>
            {metadataService.map((metadataService)=>
                 
                <Card>
                <CardBody>
                    <CardTitle tag="h3">Book Title: {metadataService.title}</CardTitle>
                    <CardSubtitle tag="h5">{metadataService.subTitle}</CardSubtitle>
                    <CardBody>
                        <img width="200 px"src={metadataService.cardImage} alt="Card image"></img>
                    </CardBody>
                    <CardText>{metadataService.cardText}</CardText>
                    
                    <Button color="success" href="#">Buy</Button>{' '}
                    <Button color="danger"href="#">Rent</Button>
                
                </CardBody>
                </Card>            
            )}
        </div>
    )
}

export default BodyComponent;

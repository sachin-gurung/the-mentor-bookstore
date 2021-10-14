import React, { useEffect, useState } from "react";
import metadataService from '../services/metadataService';
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";


const BodyComponent = (props) => {

    const [books, setBooks] = useState([])

    useEffect(
        () => {
            metadataService.getbookList().then((result)=>{
             setBooks(result.data);
            })
        },books);

    return(
        <div>
            <br/>
            <h1> List of Books</h1>
            <br/>
            {books.map((book)=>
                 
                <Card>
                <CardBody>
                    <CardTitle tag="h3">Book Title: {book.title}</CardTitle>
                    <CardSubtitle tag="h5">{book.subTitle}</CardSubtitle>
                    <CardBody>
                        <img width="200 px"src={book.cardImage} alt="Card image"></img>
                    </CardBody>
                    <CardText>{book.cardText}</CardText>
                    
                    <Button color="success" href="#">Buy</Button>{' '}
                    <Button color="danger"href="#">Rent</Button>
                
                </CardBody>
                </Card>            
            )}
        </div>
    )
}

export default BodyComponent;

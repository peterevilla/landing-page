import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, Col, Row } from 'reactstrap';


const Example = (props) => {
  return (
    <div>

      <Row>
          
       <Col>
        <Card inverse>
            <CardImg width="100%" src="https://images.pexels.com/photos/2462996/pexels-photo-2462996.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card image cap" />
            <CardImgOverlay>
            <CardTitle>Card Title</CardTitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
            <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
            </CardImgOverlay>
        </Card>
       </Col> 

       <Col>
        <Card inverse>
            <CardImg width="100%" src="https://images.pexels.com/photos/3212164/pexels-photo-3212164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card image cap" />
            <CardImgOverlay>
            <CardTitle>Card Title</CardTitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
            <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
            </CardImgOverlay>
        </Card>
       </Col> 

       <Col>
        <Card inverse>
            <CardImg width="100%" src="https://images.pexels.com/photos/3115007/pexels-photo-3115007.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card image cap" />
            <CardImgOverlay>
            <CardTitle>Card Title</CardTitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
            <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
            </CardImgOverlay>
        </Card>
       </Col>   
      
      </Row>  
      
    </div>
  );
};

export default Example;

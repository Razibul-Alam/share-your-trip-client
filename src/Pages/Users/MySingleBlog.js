import React from 'react';
import {Button,Col,Card} from 'react-bootstrap'
const MySingleBlog = ({order,cancelOrder}) => {
    const{_id,title,status,place,description}=order;
  
    return (
        <Col>
        <Card>
          <Card.Body className='text-center'> 
           <Card.Text className='text-danger'>
              {title}
            </Card.Text>
            <Card.Text className=''>
            Place: {place}
            </Card.Text>
            <Card.Text className='text-primary'>
              {description}
            </Card.Text>
            <Card.Text className='text-warning'>
             {status}
            </Card.Text>
            <Button onClick={()=>{cancelOrder(_id)}}>Cancel</Button>
          </Card.Body>
          
        </Card>
      </Col>
    );
};

export default MySingleBlog;
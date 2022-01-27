import React from 'react';
import { Col,Card,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios'

const SingleBlog = ({job}) => {
    const{_id,img,title,description,place}=job;
    const addToFavorite=(job)=>{
      axios.post('https://dry-mesa-09659.herokuapp.com/addfavorite',job)
      .then(response => { 
      })
      }
    return (
        <Col className=''>
      <Card>
        <Card.Img variant="top" src={img} className='img-fluid' />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
           {place}
          </Card.Text>
          <Card.Text>
           {description}
          </Card.Text>
          <div className="d-flex justify-content-between align-items-center">
          </div>
          <div className='d-flex justify-content-between'>
          <button className='btn btn-success'onClick={()=>{addToFavorite(job)}}>Add To favorite</button>
          <Link to={`/single-blog/${_id}`}>Apply</Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default SingleBlog;
import React,{useEffect,useState} from 'react';
import { Col,Card,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons';

const SingleBlog = ({job}) => {
  const[comment,setComment]=useState([])
    const{_id,img,title,description,place,email}=job;
    useEffect(()=>{
      fetch(`https://dry-mesa-09659.herokuapp.com/getComments?search=${_id}`)
      .then(res=>res.json())
      .then(data=>{
          setComment(data)
          
      })
          },[_id])
    return (
        <Col className=''>
     <Card>
  <Link to={`/single-blog/${_id}`}><Card.Header>{title}</Card.Header></Link>
  <span className='mt-1 text-success'><FontAwesomeIcon className='text-primary' icon={faSearchLocation} /> {place}</span>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        This is most visited place. May peoples come here to visit. This is most visited place. May peoples come here to visit.
        erat a ante.{' '}
      </p>
      <footer className="blockquote-footer">
        Shared by <cite title="Source Title">{email}</cite>
      </footer>
      <Link to={`/single-blog/${_id}`}><small>{comment?.length} Comment</small></Link>
    </blockquote>
  </Card.Body>
</Card>
    </Col>
    );
};

export default SingleBlog;
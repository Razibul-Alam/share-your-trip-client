import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { Card } from 'react-bootstrap';


const BlogDetails = () => {
    const[singleBlog,setSingleBlog]=useState({})
    const{blogId}=useParams()
    console.log(blogId,singleBlog)
    useEffect(()=>{
        axios.get(`https://dry-mesa-09659.herokuapp.com/singleBlog/${blogId}`)
        .then(res => {
          const item= res.data;
          setSingleBlog(item[0])
          
        })
    },[])
    console.log(singleBlog)
    return (
        <div>
            <Card>
        {/* <Card.Img variant="top" src={img} className='img-fluid' /> */}
        <Card.Body>
          <Card.Title>{singleBlog?.company}</Card.Title>
          <Card.Text>
           {singleBlog?.designation}
          </Card.Text>
          <Card.Text>
           {singleBlog?.description}
          </Card.Text>
          <div className="d-flex justify-content-between align-items-center">
          </div>
          <div className='d-flex justify-content-between'>
          {/* <button className='btn btn-success'onClick={()=>{addToFavorite(job)}}>Add To favorite</button> */}
          </div>
        </Card.Body>
      </Card>
        </div>
    );
};
export default BlogDetails;
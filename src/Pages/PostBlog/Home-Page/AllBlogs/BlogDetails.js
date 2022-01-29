import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { Card, FormControl, InputGroup } from 'react-bootstrap';
import useAuth from '../../../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import ModalMessage from './../../../Users/ModalMessage';
import { faClosedCaptioning, faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faSearchLocation } from '@fortawesome/free-solid-svg-icons';


const BlogDetails = () => {
  const[comment,setComment]=useState([])
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
    const{user}=useAuth()
    const { register,reset, handleSubmit,formState: { errors } } = useForm();
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
    
    const onSubmit=data=>{
      const comment={identy:singleBlog?._id,comment:data.sentence,email:user.email}
      axios.post('https://dry-mesa-09659.herokuapp.com/addComment',comment)
      .then(response => { 
        if(response.data.insertedId){
          handleShow()
                      reset()
                      
                    }
      })
    }

     useEffect(()=>{
      fetch(`https://dry-mesa-09659.herokuapp.com/getComments?search=${singleBlog?._id}`)
      .then(res=>res.json())
      .then(data=>{
          setComment(data)
          
      })
          },)
    return (
      <>
        <div className='d-flex justify-content-center my-5 p-4'>
        <Card>
  <Card.Header>{singleBlog?.title}</Card.Header>
  <Card.Body>
  <Card.Img variant="top" src={singleBlog?.img} />
    <blockquote className="blockquote mb-0">
      <h5><FontAwesomeIcon icon={faSearchLocation} /> {singleBlog?.place}</h5>
      <p>Approximate Cost - {singleBlog?.cost}</p>
      <p>
        {' '}
        {singleBlog?.description}{' '}
      </p>
      <footer className="blockquote-footer">
        Shared by <cite title="Source Title">{singleBlog?.email}</cite>
      </footer>
      <small>Comment{comment?.length}</small>
    </blockquote>
  </Card.Body>
</Card>
     
        </div>
        <div className='w-50 m-auto'>
          {comment?.length} Comments
          {comment?.map(com=><Card body><p className='text-primary'><FontAwesomeIcon icon={faUser} /> {com.email}</p>{com.comment}</Card>)}</div>
        <div className="mt-4 d-flex justify-content-center row">
         <div className="p-3 rounded col-lg-6 col-sm-10 shadow">
         <ModalMessage show={show} setShow={setShow} message={'Succesfully created'} />
            <form onSubmit={handleSubmit(onSubmit)}>
    <input className="form-control mt-3" type="text" placeholder="Comment" {...register("sentence",{ required: true })} />
    {errors.exampleRequired && <span>This field is required</span>}
    <input className='form-control bg-primary mt-3' type="submit" value="Add Comment"/>
  </form>
        </div>
        </div>
        </>
    );
};
export default BlogDetails;
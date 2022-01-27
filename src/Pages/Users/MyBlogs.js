import React,{useState,useEffect} from 'react';
import useAuth from './../../Hooks/useAuth';
import { Row } from 'react-bootstrap';
import axios from 'axios'
import ModalMessage from './ModalMessage';
import MySingleBlog from './MySingleBlog';


const MyBlogs = () => {
    const[myBlogs,setMyBlogs]=useState()
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const{user}=useAuth()
    // load all orders
    useEffect(()=>{
        axios.get(`https://dry-mesa-09659.herokuapp.com/getBlogsByEmail?email=${user?.email}`)
        .then(res => {
          const allBlogs= res.data;
          setMyBlogs(allBlogs)
          
        })
    },[myBlogs])

       // cancel booking
       const cancelOrder=(_id)=>{
        const confirmDelete=window.confirm('Are you sure? Do you want to remove?')
        if(confirmDelete){
         axios.delete(`https://dry-mesa-09659.herokuapp.com/removeItem/${_id}`)
         .then((result) =>{if(result.data.deletedCount>0){
 const remainingItems=myBlogs?.filter(booking=>!booking._id==_id)
 handleShow()
 setMyBlogs(remainingItems)
         }});
        }
       }

    return (
        <>
        <ModalMessage show={show} setShow={setShow} message={'Succesfully deleted'} />
        <div className='container w-75 my-5'>
            <h2 className='text-center text-danger mb-5'>The number of Blogs {myBlogs?.length}</h2>
            <Row xs={1} md={3} className="g-4">
           {myBlogs?.map(order=><MySingleBlog order={order} key={order._id} cancelOrder={cancelOrder}/>)}
           </Row>
        </div>
        </>
    );
};

export default MyBlogs;
import React,{useState,useEffect} from 'react';
import axios from 'axios'
import { Table, Button, NavLink } from 'react-bootstrap';
import ModalMessage from './../Users/ModalMessage';
import useAuth from '../../Hooks/useAuth';
import { Link } from 'react-router-dom';


const ManageAllBlogs = () => {
  const{user}=useAuth()
    const[allOrders,setAllOrders]=useState([])
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
        // load all orders
        useEffect(()=>{
            axios.get(`https://dry-mesa-09659.herokuapp.com/allBlogs`)
            .then(res => {
              const allOrders = res.data;
              setAllOrders(allOrders)
              
            })
        },[allOrders])

         // cancel booking
       const cancelOrder=(_id)=>{
        const confirmDelete=window.confirm('Are you sure? Do you want to remove?')
        if(confirmDelete){
         axios.delete(`https://dry-mesa-09659.herokuapp.com/removeItem/${_id}`)
         .then((result) =>{if(result.data.deletedCount>0){
 const remainingItems=allOrders?.filter(booking=>!booking._id==_id)
 handleShow()
 setAllOrders(remainingItems)
         }});
        }
       }
        
       // booking approve handle
    const approveOrder=(id)=>{
        const approval={status:`Approved by ${user.email} `,id:id}
  axios.put('https://dry-mesa-09659.herokuapp.com/updateStatus',approval)
  .then((result)=>console.log(result))
  approveOrder()
      }
    return (
        <>
         <ModalMessage show={show} setShow={setShow} message={'Succesfully deleted'} />
        <div className='container'>
        <h2 className="text-danger text-center my-3">{allOrders?.length} Blogs</h2>
    <Table bordered hover responsive variant='dark'>
    <thead>
      <tr>
        <th>SL</th>
        <th>Email</th>
        <th>Place</th>
        <th>Status</th>
        <th>Action</th>
        <th>Action</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>

    
   {allOrders.map((order,index)=><tr>
    <td>{index+1}</td>
    <td>{order.email}</td>
    <td>{order?.place}</td>
    <td>{order?.status}</td>
    <td>{(order?.status=='Pending')?<Button className='me-2' onClick={()=>{approveOrder(order?._id)}}>Approve</Button>:<p>Approved</p>}</td>
    <td><Button variant='danger' onClick={()=>{cancelOrder(order?._id)}}>Cancel</Button></td>
    <td><NavLink as={Link} to='update'><Button variant='success'>Update</Button></NavLink></td>
    
  </tr>)}
   


</tbody>
</Table>

</div>
</>
    );
};

export default ManageAllBlogs;
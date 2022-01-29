import React,{useState} from 'react';
import { useForm } from "react-hook-form";
import { Col, Row, Toast, Button} from 'react-bootstrap';
import axios from 'axios';
import useAuth from './../../Hooks/useAuth';
import ModalMessage from './../Users/ModalMessage';
const CreateAdmin = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
    const{user}=useAuth()
    const { register,reset, handleSubmit,formState: { errors } } = useForm();
    const onSubmit = data =>{

//         const updateInfo={email:user.email,role:'admin'}
//       axios.put(`https://dry-mesa-09659.herokuapp.com/createAdmin/${data.email}`,updateInfo)
//       .then(response =>{
//           if(response.data.insertedId){
// handleShow()
//             reset()
            
//           }
//         });
        
        
    }
    return (
        <>
        <h5 className="text-center mb-3">Update</h5>
        <div className="mt-4 d-flex justify-content-center row">
         <div className="p-4 rounded col-lg-8 col-sm-10 shadow">
         <ModalMessage show={show} setShow={setShow} message={'Updated created'} />
            <form onSubmit={handleSubmit(onSubmit)}>
    <input className="form-control mt-3" type="text" placeholder="Comming soon......" {...register("email",{ required: true })} />
    {errors.exampleRequired && <span>This field is required</span>}
    <input className='form-control bg-primary mt-3' type="submit" value="Update"/>
  </form>
        </div>
        </div>
        </>
    );
};

export default CreateAdmin;
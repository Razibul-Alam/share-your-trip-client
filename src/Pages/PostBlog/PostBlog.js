import React,{useState,useEffect} from 'react';
import axios from 'axios'
import { useForm } from 'react-hook-form';
import useAuth from './../../Hooks/useAuth';
import ModalMessage from './../Users/ModalMessage';

const PostBlog = () => {
  const{user,admin}=useAuth()
    const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
    const [imgUrl,setImgUrl]=useState('')
    const [uploading,setUploading]=useState(false)
    const { register,reset, handleSubmit,formState: { errors } } = useForm();
 
    const onSubmit = data =>{
        console.log(data)
        let statusInfo=''
        if(admin){
statusInfo='Approved'
        }else{
          statusInfo='Pending'
        }

        const info={
          place:data.place,
            title:data.title,
            description:data.description,
            status:statusInfo,
            cost:data.cost,
            Date:new Date().toLocaleDateString,
            email:user.email,
            img:imgUrl,
        }
      axios.post('https://dry-mesa-09659.herokuapp.com/addBlog',info)
      .then(response => { 
        console.log(response.data)
        if(response.data.insertedId){
          handleShow()
         reset() 
        }
      });
     
    }
  
    // image upload
    const handleFile=(e)=>{
        const fileInfo=e.target.files
      const imgData=new FormData()
      imgData.set("key","cd8b0025cccd4015a70e149fd2ab8ad0")
      imgData.append("image",fileInfo[0])
      setUploading(true)
      axios.post('https://api.imgbb.com/1/upload',imgData)
          .then(response =>{setImgUrl(response.data.data.url)
          setUploading(false)});
      }
      console.log(imgUrl)
    const productImageRegister = register("productImage", )
    // {required: true}
    return (
      <>
      <ModalMessage show={show} setShow={setShow} message={'Submitted'} />
        <div className="mt-5 d-flex justify-content-center row">
        <div className="p-4 rounded col-lg-6 col-sm-10 shadow">
        <h2 className="text-center text-danger mb-4">Create a Blog</h2>
   <form onSubmit={handleSubmit(onSubmit)}>
   <input className="form-control mt-2"  type="text" placeholder="Title" {...register("title",{ required: true })} />
   <input className="form-control mt-2"  type="text" placeholder="place" {...register("place",{ required: true })} />
   <input className="form-control mt-2"  type="text" placeholder="cost" {...register("cost",{ required: true })} />
   <input className="form-control mt-2"  type="textArea" placeholder="Description" {...register("description", { required: true })} />
   <input className="form-control mt-2"
      type="file"
      {...productImageRegister }
      onChange={e => {
          productImageRegister.onChange(e);
          handleFile(e);
      }} />
   {errors.exampleRequired && <span>This field is required</span>}
   {uploading?<p>Uploading....</p>:<input className="form-control mt-2 bg-primary"  type="submit"/>}
 </form>
 </div>
 </div>
 </>
    );
};

export default PostBlog;
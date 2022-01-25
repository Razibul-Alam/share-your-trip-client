import React,{useState,useEffect} from 'react';
import axios from 'axios'
import { useForm } from 'react-hook-form';

const PostBlog = () => {
    const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
    const [imgUrl,setImgUrl]=useState('')
    const [uploading,setUploading]=useState(false)
    const { register,reset, handleSubmit,formState: { errors } } = useForm();
 
    const onSubmit = data =>{
        console.log(data)
        const info={
          category:data.category,
            company:data.company,
            designation:data.designation,
            description:data.description,
            // img:imgUrl,
        }
      axios.post('https://dry-mesa-09659.herokuapp.com/addBlog',info)
      .then(response => { 
        handleShow()
        reset()
      })
     
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
        <div className="mt-5 d-flex justify-content-center row">
        <div className="p-4 rounded col-lg-6 col-sm-10 shadow">
        <h2 className="text-center text-danger mb-4">Add Car</h2>
   <form onSubmit={handleSubmit(onSubmit)}>
   <input className="form-control mt-2"  type="text" placeholder="Company" {...register("company",{ required: true })} />
   <input className="form-control mt-2"  type="text" placeholder="Factory category" {...register("category",{ required: true })} />
   <input className="form-control mt-2"  type="text" placeholder="designation" {...register("designation",{ required: true })} />
   <input className="form-control mt-2"  type="textArea" placeholder="Description" {...register("description", { required: true })} />
   {/* <input className="form-control mt-2"
      type="file"
      {...productImageRegister }
      onChange={e => {
          productImageRegister.onChange(e);
          handleFile(e);
      }} /> */}
   {errors.exampleRequired && <span>This field is required</span>}
   {uploading?<p>Uploading....</p>:<input className="form-control mt-2 bg-primary"  type="submit"/>}
 </form>
 </div>
 </div>
    );
};

export default PostBlog;
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';

// import { useSelector, useDispatch } from 'react-redux';
import SingleBlog from './../SingleBlog/SingleBlog';

const AllBlogs = ({category}) => {
    const [jobs,setJobs]=useState([])  
    //   let info = useSelector((state) =>state.jobs.jobs)
//   const dispatch = useDispatch()

    useEffect(()=>{
fetch(`https://dry-mesa-09659.herokuapp.com/allblogs?search=${category}`)
.then(res=>res.json())
.then(data=>{
    const filterData=data.filter(info=>info.status!=='Pending')
    setJobs(filterData)
})
    },[category])
    console.log(jobs)

    return (
        <div className='container my-5'>
            <Row xs={1} md={2} className="g-4 mt-3">
           {jobs?.map(job=><SingleBlog job={job} key={job._id}/>)}
        </Row>
        </div>
    );
};

export default AllBlogs;
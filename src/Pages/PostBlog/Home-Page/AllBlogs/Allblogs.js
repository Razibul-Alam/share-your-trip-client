import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import SingleBlog from './../SingleBlog/SingleBlog';
import './Pagination.css'

const AllBlogs = ({category}) => {
    const [jobs,setJobs]=useState([])  
    const [pageNumber,setPageNumber]=useState(0)

    useEffect(()=>{
fetch(`https://dry-mesa-09659.herokuapp.com/allblogs?search=${category}`)
.then(res=>res.json())
.then(data=>{
    const filterData=data.filter(info=>info.status!=='Pending')
    setJobs(filterData)
    if(category){
        const categoryData=filterData.filter(info=>info.category==category)
        setJobs(categoryData)
    console.log(jobs,category)
    }
})
    },[category])
    
    const blogPerPage=10
    const visitedPage=pageNumber*blogPerPage
    const pageCount=Math.ceil(jobs.length/blogPerPage)
    const changePage=({selected})=>{
setPageNumber(selected)
    }

    return (
        <>
        <div className='container my-5'>
            <Row xs={1} md={3} className="g-4 mt-3">
           {jobs?.slice(visitedPage,visitedPage+blogPerPage).map(job=><SingleBlog job={job} key={job._id}/>)}
        </Row>
        </div>
        <ReactPaginate className='pagination'
        breakLabel="..."
        nextLabel="next >"
        // onPageChange={handlePageClick}
        // pageRangeDisplayed={5}
        pageCount={pageCount}
        onPageChange={changePage}
        previousLabel="< previous"
        // renderOnZeroPageCount={null}
      />
        </>
    );
};

export default AllBlogs;
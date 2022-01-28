import React,{useState} from 'react';
import HomeSidebar from './../HomeSidebar/HomeSidebar';
import AllBlogs from './../AllBlogs/Allblogs';
import Banner from './../Banner/Banner';



const HomeMain = () => {
    const[category,setCategory]=useState('')
    const selectSector =(category)=>{
        setCategory(category)
            }
            console.log(category)
    return (
        <>
        <Banner/>
        <div className='row'>
            <div className='col-lg-3 sidebar'>
          <HomeSidebar selectSector={selectSector}/>
            </div>
            <div className='col-lg-9'>
            <AllBlogs category={category}/>
            </div>
        </div>
        </>
        
    );
};

export default HomeMain;
import React,{useState} from 'react';
import HomeSidebar from './../HomeSidebar/HomeSidebar';
import AllBlogs from './../AllBlogs/Allblogs';

const HomeMain = () => {
    const[category,setCategory]=useState('e')
    const selectSector =(category)=>{
        setCategory(category)
            }
    return (
       
        <div className='row'>
            <div className='col-lg-3 sidebar'>
          <HomeSidebar selectSector={selectSector}/>
            </div>
            <div className='col-lg-9'>
            <AllBlogs category={category}/>
            </div>
        </div>
        
    );
};

export default HomeMain;
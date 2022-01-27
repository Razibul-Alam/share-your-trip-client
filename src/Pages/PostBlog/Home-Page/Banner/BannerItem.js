
import React from 'react';
import { Link } from 'react-router-dom';

const BannerItem = () => {
    return (
        <main style={{height:'500px'}} className="row d-flex align-items-center bg-dark text-light">
        <div className="col-md-4 offset-md-1">
            <h1 className='text-primary'>Share Tour<br/>With Peoples</h1>
            <Link to ="/post-blog"><button className="btn btn-primary">Share</button></Link>
        </div>
        <div className="col-md-7">
            <img src='https://th.bing.com/th/id/R.681815b16b1b843c2de62d643fb66e35?rik=40hDi4VY%2bVtWWg&pid=ImgRaw&r=0' alt="" className="img-fluid"/>
        </div>
    </main>
    );
};

export default BannerItem;
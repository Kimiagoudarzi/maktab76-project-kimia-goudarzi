import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./table.css";


const Pagination = ({postsPerPage, totalPosts,paginate}) => {
    const [number, setNumber] = useState([]);
    
    useEffect(()=>{
        axios.get(`http://localhost:3002/products`)
        .then((res)=>{
            console.log(res.data.length)
            setNumber(Math.ceil(res.data.length/15));
        })
    },[])
  return (
    <nav className='d-flex justify-content-center pagination-style'>
        <ul className='pagination'>
            {Array.from(Array(number).keys())?.map((item,index) => (
                <li key={item} className="page-item">
                    <a onClick={()=> paginate(item)} href='#'className='page-link'>
                        {index+1}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
  )
}
export  default Pagination;
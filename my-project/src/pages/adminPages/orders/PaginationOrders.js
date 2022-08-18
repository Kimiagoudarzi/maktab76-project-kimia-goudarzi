import React from 'react';
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./tableorder.css";


const Pagination = ({postsPerPage, totalPosts,paginate}) => {
    const pageNumbers = [];
    for(let i =1; i<= Math.ceil(totalPosts/ postsPerPage); i++){
        pageNumbers.push(i);
    }
  return (
    <nav className='d-flex justify-content-center pagination-style'>
        <ul className='pagination'>
            {pageNumbers.map(number => (
                <li key={number} className="page-item">
                    <a onClick={()=> paginate(number)} href='#'className='page-link'>
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
  )
}
export  default Pagination;
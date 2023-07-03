
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const Category = () => {

    const [cat, setCat] = useState([]);
    const { id } = useParams();

    useEffect(()=>{
       axios.get(`https://fakestoreapi.com/products/categories`)
       .then((res)=>{
         console.log(res.data)
         setCat(res.data)
       })
    },[])
    return (
        <div>
           
        </div>
    )
}

export default Category
import React, { useState, useEffect } from "react";

import PostJson from "../api/post.json"
import { useParams } from "react-router-dom";

const User = () => {
    
    const params = useParams()
    const { slug } = params
    
    const [ title, setTitle ] = useState()
    const [ des, setDes ] = useState()
    
    useEffect(() => {
        PostJson.filter((items) => {
                    
            if (items.slug === slug) {
                setTitle(items.title)
                setDes(items.description)
            }
        })
    }, [])

    return(
        <>
            <h2>{title}</h2>
            <p>{des}</p>
        </>
    )
}

export default User
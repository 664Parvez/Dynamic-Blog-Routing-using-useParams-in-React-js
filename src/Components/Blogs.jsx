import React from 'react'
import { NavLink } from 'react-router-dom'

import PostApi from "../api/post.json"

const Blogs = () => {
  return (
    <>
        {
            PostApi.map((items) => {
                const desSlice = items.description.slice(0, 100) + " . . ."
                return( 
                    <>
                        <h2>{ items.title }</h2>
                        <p>{ desSlice }</p>
                        <NavLink to={`/user/` + items.slug} className='btn btn-primary'>Read More</NavLink>
                    </>
                )
            })
        }
    </>
  )
}

export default Blogs
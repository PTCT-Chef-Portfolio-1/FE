import React, { useState, useEffect } from 'react';
//import axios from "axios";
import {Link} from "react-router-dom"

export default function Dashboard() {
    // const [posts, SetPosts] = useState([]);

    // useEffect(() => {
    //     axios
    //         .get(`https://backend-chef.herokuapp.com/api/recipes/`)
    //         .then(res => {
    //             SetPosts(res.data.results);
    //             console.log(res.data);
    //         })
    //         .catch(err => {
    //             console.log('this data was not returned', err);
    //         })
    //     }, []);

    //     console.log(posts);

        return (
            <section className="recipe-list">
                {/* {posts.map(post => {
                    return <Card post={post} key={post.created}/>
                })} */}
                <div className="post-add-edit">
                    <button>Edit recipe</button>
                    <Link className="add" to="/add">Add New Recipe</Link>
                </div>
            </section>
        )

}

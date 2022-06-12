import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function DetailUser() {
    const [user, setUser] = useState([]);
    const params = useParams();
    useEffect(()=>{
        async function getUser() {
            try {
                const response = await axios.get("http://localhost:5000/users/"+params._id)
                setUser(response.data);
                console.log(response.data);
            } catch(err) {
                console.error(err);
            }
        }
        getUser();
    }, [])
    return (
        <>
            <h1>Detail User</h1>
            <p>Name : {user.name}</p>
            <p>Email : {user.email}</p>
            <p>_id : {user._id}</p>
            <Link to="/">Back</Link>
        </>
    )
}

export default DetailUser;
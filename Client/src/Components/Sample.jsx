import React from 'react'
import { useState } from 'react'
import axios from 'axios'


const Sample = () => {
    const [message, setMessage] = useState("")
    let fetch = async () => {
        try {

            const result = await axios(
                {
                    method: "GET",
                    url: "http://localhost:5029/api/test"
                }
            )

            setMessage(result.data)
        } catch (error) {
            console.log("Couldn't fetch the data from BACKEND", error)
        }
    }

    return (
        <>
            <h1 className='text-black'>Below is the message from backend</h1>
            <p className='text-black '>{message.data1}</p>
            <button onClick={fetch} className='p-4 bg-slate-600 text-white'>Fetch Backend Message</button>
        </>
    )
}

export default Sample
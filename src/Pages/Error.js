import React from 'react'
import { useNavigate } from 'react-router-dom'


function Error() {

    const navigate = useNavigate()

  const goback =()=>{
        return navigate(-1)
  }

    return (
        <div>

            <div className='d-flex justify-content-center align-items-center'>
                <img src="" style={{ width: "30rem", height: "30rem" }} className="img-fluid " alt='error' ></img>
            </div>

            <div className='text-center'>
                <h2>Ohh! Page Not Found</h2>
                <p className='error-text'>We can't seem to find the page you're looking for</p>
                <button className='btn btn-primary' onClick={goback}>Go back</button>
            </div>


        </div>
    )
}

export default Error
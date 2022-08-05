import React from 'react'

function Inputbox({label,type,id,onchange,value}) {
    return (
        <div>
            <div className='mx-5 my-2'>
                <label className='form-label' htmlFor={id}>{label}</label>
                <input type={type} value={value} onChange={onchange} id={id} className='form-input'></input>
            </div>
        </div>
    )
}

export default Inputbox
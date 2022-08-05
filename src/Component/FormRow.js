import React from 'react'

function FormRow({label,type,id,onchange,value}) {
    return (
        <div>
            <label className='form-label' htmlFor={id}>{label}</label>
            <input  type={type} value={value} onChange={onchange} id={id} className='form-input'></input>
        </div>
    )
}

export default FormRow
import React, { useRef, useState } from 'react'
import './assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function ToDoList() {
    const input = useRef();
    const [list, setList] = useState(['Wake Up']);
    return (
        <>
            <div className="container">
                <div className="mt-5 col-md-4 d-flex gap-5">
                    <input type="text" ref={input} className='form-control' placeholder='Enter...' />
                    <button className='btn btn-sm btn-success' onClick={() => {
                        let oList = [...list];
                        oList.push(input.current.value);
                        setList(oList);
                    }}>Add</button>
                </div>
                <div className="mt-5">
                    <ul>
                        {list.map((el, index) => {
                            return <li key={index} className='mb-3'><span className='d-flex align-items-center gap-5'>{el} <button className='btn btn-sm btn-danger' onClick={() => {
                                let oList = [...list];
                                oList.splice(index, 1);
                                setList(oList);
                            }}>Delete</button></span></li>
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

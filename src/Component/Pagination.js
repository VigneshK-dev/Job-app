import React  from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { HiChevronDoubleLeft, HiChevronDoubleRight} from 'react-icons/hi';
import { HandlePagechange } from '../Reducer/Reducer';

function Pagination() {

    const numofbtns = useSelector(state => state.State.Jobs.numofpg)
    const pagenum = useSelector(state => state.State.Filter.page)
    const dispatch = useDispatch()

  

    const TogglePage = (id,value)=>{
        dispatch(HandlePagechange({names:id,values:value}))
    }
    
     
    const Btnarray = Array.from({ length: numofbtns }, (_, index) => {
        return index + 1
    })

    // console.log(Btnarray)

    const handlepages = (state,id)=>{
        if(state === "previous") {
            if(pagenum !== 1){
                dispatch(HandlePagechange({names:id,values:pagenum-1}))
            }
        }else if(state === "next"){
              if(pagenum !== numofbtns ){
                dispatch(HandlePagechange({names:id,values:pagenum+1}))
              }
        } 
          
         
    }


    return (


  


            <div className='pagination-btns mt-5'>
                <button onClick={(e)=>handlepages("previous",e.target.id)} id = "page"  className='prev-btn'><HiChevronDoubleLeft/>Prev</button>



                <div className='page-btn-container mx-3'>
                    {Btnarray.map((ele, index) => (
                        <button key={index} id="page" onClick={(e)=>TogglePage(e.target.id,ele)} className={pagenum === index+1 ? 'active-page-btn ' : 'in-active-page-btn'}  >{ele}</button>
                    ))}
                </div>

                <button id = "page" onClick={(e)=>handlepages("next",e.target.id)}  className ="next-btn"><HiChevronDoubleRight/>Next</button>

            </div>
        
 
    )
}

export default Pagination
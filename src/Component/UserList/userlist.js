import React from 'react'
import "./userlist.css"
import Card from '../Card/card';
import {FaRegTrashAlt} from "react-icons/fa";
import {removeFromSelected} from "../Redux/SelectedStateReducer";
import {addInWaiting} from "../Redux/WaitingStateReducer"
import {useSelector,useDispatch} from "react-redux";
const userlist = () => {
    const state= new useSelector(state=>(state.SelectedStateReducer));
    const dispatch =new useDispatch();
    const handleDelete=(id)=>{
        let index=state.findIndex((ele)=>{return ele.id ===id;}); 
        let obj=state[index];
        dispatch(removeFromSelected({index:index}));
        dispatch(addInWaiting({obj:obj}));
    }
    return (
    <div className='user-list'>
        {
     state.map((element)=>{
            return (
                <div className='card-box'id={element.id}key={element.id}>
                 <Card data={element}/>
                 <label className='delete-card'>
                     <FaRegTrashAlt onClick={()=>{handleDelete(element.id)}}/>
                     </label>
                </div>
                 )
            })
        }
    </div>
  )
}
export default userlist
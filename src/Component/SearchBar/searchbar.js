import React,{useCallback,useState} from 'react'
import "./searchbar.css";
import {FaTimes} from "react-icons/fa";
import {useSelector,useDispatch} from "react-redux";
import Dropdown from '../Dropdown/dropdown';
import {removeFromPending} from "../Redux/PendingStateReducer";
import { addInSelected } from '../Redux/SelectedStateReducer';
import { addInWaiting } from '../Redux/WaitingStateReducer';
const  Searchbar = ()=> {
  const [dropdownState, setdropdownState] = new useState({
    isdropdown:false,
    inputVal:"",
  });
  const state= new useSelector(state=>(state.PendingStateReducer));
  const dispatch =new useDispatch();
  const callbackRef = useCallback(inputElement => {
        if(inputElement) {
          inputElement.focus();
        }
      },[]);
  const handleInput=(e)=>{
          let timeout;
          return (function(){
            if(timeout){
              clearTimeout(timeout);
            }
            timeout=setTimeout(() => {
              if(e.target.value===''){
                setdropdownState({...setdropdownState,isdropdown:false});
              }
              else{
              setdropdownState({...setdropdownState,inputVal:e.target.value,isdropdown:true});
              }
            }, 1000);
          })();
  }
  const handleButton=()=>{
    state.forEach((element,index) => {
      const obj=element;
      console.log(state,index);
      dispatch(removeFromPending({index:0}));
      dispatch(addInSelected({obj:obj}));
    });
  }
  const handleLabel=(id)=>{
    const index=state.findIndex((ele)=>{return ele.id===id;}); 
    const obj=state[index];
    dispatch(removeFromPending({index:index}));
    dispatch(addInWaiting({obj:obj}));
  }
  return (
    <>
    <div className='search-bar'>
      <div className='search-box'>
        {
        state && state.map((element)=>{
          return(    
          <label className='label-selected'key={element.id}>
              {element.name}
              <FaTimes className='label-selected-button'onClick={()=>handleLabel(element.id)}/>
              </label>);
            })
          }
          <input type="text"className='input-box'onChange={(e)=>handleInput(e)}
            placeholder="Add Email and Name" ref={callbackRef}/>
        </div>
        <div className='button-box'>
        <button className='button-add-cms'onClick={()=>handleButton()}>
          Add CSM
        </button>
        </div>
    </div>
    <Dropdown data={dropdownState}/>
    </>
  )
}
export default Searchbar;
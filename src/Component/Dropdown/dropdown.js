import React,{useState,useEffect} from 'react'
import "./dropdown.css";
import Card from '../Card/card';
import { useSelector,useDispatch} from 'react-redux';
import { removeFromWaiting } from '../Redux/WaitingStateReducer';
import { addInPending } from '../Redux/PendingStateReducer';
const Dropdown = (props) => {
    const dropdownState=props.data;
    const [Filterstate, setFilterstate] =new useState();
    const state= new useSelector(state=>(state.WaitingStateReducer));
    const dispatch =new useDispatch();
    useEffect(() => {
      if(props){
        let FilterElement=state.filter(function(element){
          const regex =  new RegExp(dropdownState.inputVal,'gi');
          if((regex.test(element.name) ||
          regex.test(element.email) ) && this.count<3){
             this.count++;
             return true;
           }
           else{
             return false;
           }
        },{count:0})
      setFilterstate(FilterElement);
      }
    },[props])
    const handleClick=(id)=>{
      console.log("from click");
      let index=state.findIndex((ele)=>{return ele.id ===id;}); 
      let obj=state[index];
      dispatch(removeFromWaiting({index:index}));
      dispatch(addInPending({obj:obj}));
    }
    const non_active={
        "left":`-${100}%`,
        "opacity":0
    }
  return (
    <div className="dropdown"style={dropdownState.isdropdown?{}:non_active}>
    {
      Filterstate && Filterstate.map((element)=>{
       return(
       <div onClick={()=>{handleClick(element.id)}}key={element.id}><Card data={element}/>
       </div>);
      })
    }
    </div>
  )
}
export default Dropdown
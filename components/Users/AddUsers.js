import React,{useState,useRef} from "react";
import Card from "../UI/Card";
import './AddUsers.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";


const AddUsers=(props)=>{
  
  const[error,setError]=useState('');
  const nameentered=useRef();
  const ageentered=useRef();
  const collegeentered=useRef();

  const addUserHandler=(event)=>
{  
    event.preventDefault();
    if(collegeentered.current.value.trim()===0|| nameentered.current.value.trim().length===0||ageentered.current.value.trim().length===0)
    {  setError({
      title:'Invalid input',
      message:'Please enter a valid name and age (non-empty values) '
    }
    );
      return;
    } 
    if(+ageentered<1)
    {    setError({
      title:'Invalid age',
      message:'enter valid age'
    })
        return;
    }
    props.onAddUser(nameentered.current.value,ageentered.current.value,collegeentered.current.value);
    nameentered.current.value="";
    ageentered.current.value="";
   
}
const errorHandler=()=>{

   setError(null);
}


return(
  <div>
  {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
<Card className='input'>
    <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input id ="username"type="text" 
        ref={nameentered} />
        <label htmlFor="age">Age</label>
        <input id="age" type="number"
        ref={ageentered} />
        <label htmlFor="college">CollegeName</label>
        <input id="college"type="text" ref={collegeentered}/>
       <Button type="submit">Add Users</Button>
    </form> 
</Card>

</div>
)
   
};
export default AddUsers;

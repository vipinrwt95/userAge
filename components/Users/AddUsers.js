import React,{useState} from "react";
import Card from "../UI/Card";
import './AddUsers.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";


const AddUsers=(props)=>{
  const [enteredUsername,setEnteredUsername]=useState(''); 
  const[enterdAge,setEnteredAge]=useState(''); 
  const[error,setError]=useState('');

  const addUserHandler=(event)=>
{  
    event.preventDefault();
    if(enteredUsername.trim().length===0||enterdAge.trim().length===0)
    {  setError({
      title:'Invalid input',
      message:'Please enter a valid name and age (non-empty values) '
    }
    );
      return;
    } 
    if(+enterdAge<1)
    {    setError({
      title:'Invalid age',
      message:'enter valid age'
    })
        return;
    }
    
   props.onAddUser(enteredUsername,enterdAge);
    setEnteredAge('');
    setEnteredUsername('');
}
const usernameChangeHandler=(event)=>
{
  setEnteredUsername(event.target.value);
} 
const ageChangeHandler=(event)=>
{
  setEnteredAge(event.target.value);
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
        <input id ="username"type="text" value={enteredUsername}onChange={usernameChangeHandler} />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" value={enterdAge} onChange={ageChangeHandler} />
       <Button type="submit">Add Users</Button>
    </form> 
</Card>

</div>
)
   
};
export default AddUsers;
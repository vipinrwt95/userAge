import React ,{useState} from "react";
import Card from "../UI/Card";
import './AllUsers.css';

const AllUsers=(props)=>
{
  
  
  
  
  
  return (
  <Card className="users">
     <ul> {props.users.map((user)=>
  (
   <li key={user.id} >{user.name} {user.age}years old</li>
  ))
}
</ul>
  </Card>  
  )
}
export default AllUsers;
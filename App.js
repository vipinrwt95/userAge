import React ,{useState} from 'react';
import AddUsers from './components/Users/AddUsers';
import AllUsers from './components/Users/AllUsers';



function App() {
  const[userList,setUserList]= useState([]);
  const addUsers=(uName,uAge)=>{
    
    setUserList((prev)=>
    {   
       return [...prev ,{name:uName,age:uAge,id: Math.random().toString()}];
    });
  }
 return (
    <div>
    <AddUsers onAddUser={addUsers} />
    <AllUsers users={userList}/>
    </div>
  );
}

export default App;

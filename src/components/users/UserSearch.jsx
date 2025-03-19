import React, { useState,useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";

function UserSearch() {
    const [text,setText] = useState("");

    const {users,searchUsers,clearUsers} = useContext(GithubContext);
    const {alert,setAlert} = useContext(AlertContext)
    const handleChange = (e) =>{
        setText(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(text ===''){
          setAlert('Please enter something','error')            
        }else{
            //@todo - search users
            searchUsers(text);
            setText('')
        }
    }

  return (
    <div className="mb-8 md:pl-48 lg:pl-56">
      <form className="w-full max-w-sm " onSubmit={handleSubmit} >
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Jane Doe"
            aria-label="Full name"
            value={text}
            onChange={handleChange}
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Search
          </button>
          {users.length > 0 &&           <button
            className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
            type="button" onClick={clearUsers}
          >
            Clear
          </button> }
        </div>
      </form>
    </div>
  );
}

export default UserSearch;

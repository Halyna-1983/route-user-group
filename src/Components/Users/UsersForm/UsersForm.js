
import { useState, useRef } from "react";
import style from "./UsersForm.module.css";
import shortid from 'shortid';


const UsersForm = () => { 
    const formRef = useRef();
    const [usersValue, setUsersValue] = useState({
        name: "",
        email: "",
        group: ""
    });

    const handleClear = () => { 
        setUsersValue({
        name: "",
        email: "",
        group: ""
        })
    }

    const nameInputId = shortid.generate();
    const emailInputId = shortid.generate();
    const groupInputId = shortid.generate();

   const handleSubmit = () => {
    if (!formRef.current.check()) {
      return;
    }
    handleClear();
  };
    
    return (
        <form
            ref={formRef}
            onSubmit={handleSubmit} 
            className={style.usersForm}>
      <label >
        Name:
        <input
            id={nameInputId}
            type="text"
            name="name"
            value={usersValue.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="The name can only consist of letters, apostrophes, dashes and spaces (Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc.)"
            required
            onChange={setUsersValue}
            // className={css.input_name}
            placeholder="Input name"
        />
      </label>
      <label label  >
        Phone number:
           <input
          id={emailInputId}
         type="email"
          name="email"
          value={usersValue.number}
           pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          title="Please enter a valid email address"
          required
          onChange={setUsersValue}
        //   className={css.input_name}
          placeholder="Input number"
        />
            </label>

            <label for="Details">Details</label>
            
            <select name="group" id={groupInputId}>
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
              <option value="JS">JS</option>
            </select>


        <button type='submit'>Add contact</button>
        
      </form>
)
}
export default UsersForm;
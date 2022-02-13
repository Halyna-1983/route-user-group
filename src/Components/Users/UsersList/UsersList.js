import React from 'react';
import style from './UsersList.module.css';

const ContactList = ({data, deleteContact}) => (
    <ul className={style.listItem}>
          {data?.map(value => 
              <li className={style.item}>
              <p>{value.id}</p>
              <p>{value.name}</p>
              <p>{value.email}</p>
              <p>{value.group}</p>
                  <button
                      type="button"
                      className={style.btn}
                      onClick={() => deleteContact(value.id)}>Delete User</button>
            </li>)
          }        
</ul>
)

export default ContactList;



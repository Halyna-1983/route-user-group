import { useState } from "react";
import PageHeading from '../PageHeading/PageHeading';
import UsersList from './UsersList/UsersList';
import UsersForm from './UsersForm/UsersForm';
import shortid from 'shortid';


export default function Users(value) {
  const [data, setData] = useState(
    [
    { id: '1', name: 'Rosie Simpson', email: 'rosie.simpson@mail.com', group: 'admin' },
    { id: '2', name: 'Hermione Kline', email: 'hermione.kline@yahoo.com', group: 'lector' },
    { id: '3', name: 'Eden Clements', email: 'clements@gmail.com', group: 'student' },
    { id: '4', name: 'Annie Copeland', email: 'annie.copeland@ukr.net', group: 'student' }
    ])
  
  const deleteContact = (valueId) => {
    setData(
      prevState => ({ data: prevState.data.filter(value => valueId !== value.id) })
    )
  }

  return (
    <>
      <PageHeading text="Users" />
      <UsersList data={data} onClick={() => deleteContact(value.id)}/>
      <UsersForm />
    </>
  );
}
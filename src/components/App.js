import React, { useState } from 'react';
import AddContact from './AddContact';
import ContactList from './ContactList';
import Header from './Header';
import { uuid } from 'uuidv4'


const App = () => {

    const [contacts, setContacts] = useState([])


    const addContactHandler = (contact) =>{
        // console.log(contact);
        setContacts([...contacts, {id: uuid(), ...contact}])
    }

    
    const removeContactHandler = (id) => {
        const newContactList = contacts.filter((contact)=>{
            return contact.id !== id;
        })

        setContacts(newContactList)    
    }

    // const contacts = [
    //     {
    //         id:1,
    //         name:"sudhanshu",
    //         phone:9122323,
    //         email:"sudhanshu@gmail.com"
    //     },
    //     {
    //         id:2,
    //         name:"Himashu kumari",
    //         phone: 2893292,
    //         email:"Himu23@gmail.com"
    //     },
    //     {
    //         id:3,
    //         name:"Ramu patel",
    //         phone:89328493,
    //         email:"Ramu@gmail.com"
    //     }

    // ]

    return(
        <div className="ui container">

            <Header />
            <AddContact addContactHandler={addContactHandler}/>
            <ContactList contacts={contacts} getContactId={removeContactHandler}/>
        </div>
    )
}

export default  App;
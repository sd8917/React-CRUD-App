import React from 'react';
import ContactCard from './ContactCard';


const ContactList = (props) => {
   
    const deleteContactList = (id) =>{
        props.getContactId(id)
    }

    const renderContactList = props.contacts.map((contact)=>{
        // console.log(contact);
        return (
            <ContactCard key={contact.id} contact={contact} 
            clickHandler={deleteContactList}/>
        )
    })

   
    return(
        <div className="ui celled list">
            <div className="ui center aligned icon header">
                <i className="circular users icon">

                </i>

                Contact ContactList
            </div>

            {renderContactList}


        </div>
    )
}

export default  ContactList;
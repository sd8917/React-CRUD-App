import React from 'react';

import user from '../images/user.jpg'
const ContactCard = (props) => {
    const { id, name, email, phone } = props.contact
    // console.log(props.contact);
    return (
        <>
            <div className="col item">
                <img className="ui avatar image" src={user} alt="user" />

                <div className="content">
                    <div className="ui sub header">
                        {name}
                    </div>
                    {email}
                    <div className="header">
                        {"+91"+phone}
                    </div>



                </div>
                <i className="col container trash alternate outline icon"
                    style={{
                        color: "red",
                        marginTop: "10px"
                    }} >

                </i>
            </div>

        </>
    )
}

export default ContactCard;
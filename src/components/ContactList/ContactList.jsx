import React from "react";
import contactList  from "./ContactList.module.css"
import Contact from "../Contact/Contact.jsx";

const ContactList = ({contacts, removeContact}) => {
    return (
        <div className={contactList["contact-list"]}>
            {
                contacts.map((item) => {
                   return(
                       <div key={item.id} className={contactList["contact-list-item"]}>
                           <Contact
                               id={item.id}
                               name={item.name}
                               number={item.number}
                               removeContact={removeContact}
                           />
                       </div>
                   )
                })
            }
        </div>
    )
}

export default ContactList;
import React from "react";
import contact from "./Contact.module.css"

const Contact = ({id, name, number, removeContact}) => {
    return(
        <div className={contact["contact"]}>
           <div className={contact["contact-info"]}>
               <div className={contact["contact-info-row"]}>
                   <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt={name}/>
                   <p>{name}</p>
               </div>
               <div className={contact["contact-info-row"]}>
                   <img src="https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/phone-icon.png" alt={number}/>
                   <p>{number}</p>
               </div>
           </div>
           <div className={contact["contact-btn"]}>
               <button onClick={() => removeContact(id)}>Delete</button>
           </div>
        </div>
    )
}

export default Contact;
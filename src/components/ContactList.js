import ContactItem from "./ContactItem";

function ContactList({ contacts, onDelete }) {
   return (
      <div>
         {
            contacts.map((contact) => (
               <ContactItem
                  key={contact.id}
                  id={contact.id}
                  onDelete={onDelete}
                  {...contact}
               />
            ))
         }
      </div>
   );
}

export default ContactList;
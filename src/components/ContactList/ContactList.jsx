import { ContactElement } from 'components/ContactElement/ContactElement';
import { List } from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact, filter }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {filteredContacts.map(contact => (
        <ContactElement
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={deleteContact}
        />
      ))}
    </List>
  );
};

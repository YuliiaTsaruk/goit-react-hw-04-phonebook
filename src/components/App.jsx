import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { GlobalStyle } from './GlobalStyle';
import { Container, MaineTitle, Section, Title } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount = () => {
    const savedContacts = localStorage.getItem('phonebook-contacts');

    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(
        'phonebook-contacts',
        JSON.stringify(this.state.contacts)
      );
    }
  };

  addContact = newContact => {
    const contact = {
      ...newContact,
      id: nanoid(),
    };

    const { contacts } = this.state;

    const checkName = contacts.some(
      checkContact =>
        checkContact.name.toLocaleLowerCase() ===
        contact.name.toLocaleLowerCase()
    );

    if (checkName) {
      Report.failure(
        'Notiflix Failure',
        `Cannot add to contacts this name: ${contact.name} is already in contacts.`,
        'Okay'
      );
    } else {
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, contact],
        };
      });
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(item => item.id !== contactId),
      };
    });
  };

  updateFilter = evt => {
    this.setState({
      filter: evt.target.value,
    });
  };

  render() {
    return (
      <Container>
        <Section>
          <MaineTitle>Phonebook</MaineTitle>
          <ContactForm onAdd={this.addContact} />
        </Section>

        <Section>
          <Title>Contacts</Title>
          <Filter onUpdateFilter={this.updateFilter} />
          <ContactList
            contacts={this.state.contacts}
            deleteContact={this.deleteContact}
            filter={this.state.filter}
          />
        </Section>
        <GlobalStyle />
      </Container>
    );
  }
}

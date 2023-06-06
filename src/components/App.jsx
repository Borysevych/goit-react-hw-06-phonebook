import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter.jsx';
import { ContactList } from './ContactList/ContactList';
import { AppContainer } from './App.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);
  return (
    <AppContainer>
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.length > 0 && (
        <div>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      )}
    </AppContainer>
  );
};
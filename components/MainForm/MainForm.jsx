import ContactForm from 'components/ContactForm/ContactForm ';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

const MainForm = () => {
  return (
    <div className="phoneBook">
      <h1>Phonebook</h1>
      <ContactForm />
      <h1>Contacts</h1>
      <Filter />
      <ContactList />
    </div>
  );
};

export default MainForm;

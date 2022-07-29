import ContactForm from "components/ContactForm/ContactForm ";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import { Container } from "react-bootstrap";

const MainForm = () => {
  return (
    <>
 
    <Container className="mx-auto">
      <div>
       
        <h1>Phonebook</h1>
        <ContactForm />
        <h1>Contacts</h1>
        <Filter />
        <ContactList />
      </div>
    </Container>
    </>
  );
};

export default MainForm;

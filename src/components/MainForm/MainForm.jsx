import ContactForm from "components/ContactForm/ContactForm ";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import { Container } from "react-bootstrap";

const MainForm = () => {
  return (
    <Container className="mx-auto">
        <ContactForm />
        <Filter />
        <ContactList />
    </Container>
  );
};

export default MainForm;

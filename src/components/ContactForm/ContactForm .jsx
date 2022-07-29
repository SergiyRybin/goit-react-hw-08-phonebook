import { nanoid } from "nanoid";
import {
  useAddContactMutation,
  useGetContactsQuery,
  usePatchContactMutation,
} from "redux/slice";
import { Alert, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function ContactForm() {
  const [addContact] = useAddContactMutation();
  const [patchContact] = usePatchContactMutation();
  const [error, setError] = useState(false);
  const { data } = useGetContactsQuery();
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, number } = e.currentTarget.elements;
    if (data) {
      const contactInList = data
        .map((el) => el)
        .find(
          (el) =>
            el.name.toLowerCase() === name.value.toLowerCase() &&
            el.number.toLowerCase() === number.value.toLowerCase()
        );

      const patchContactInList = data
        .map((el) => el)
        .find(
          (el) =>
            el.name.toLowerCase() === name.value.toLowerCase() &&
            el.number.toLowerCase() !== number.value.toLowerCase()
        );
      if (patchContactInList) {
        // console.log("додати контакт");
        // console.log(patchContactInList);
        patchContact( {id: patchContactInList.id ,number: number.value});
        return;
      }
      if (contactInList) {
        setError(true);
        setName(name.value);
        e.currentTarget.reset();
        return;
      }
    }
    addContact({ name: name.value, number: number.value, id: nanoid(5) });

    e.currentTarget.reset();
  };

  return (
    <Container className="mx-auto">
      <Form className="mx-auto" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            placeholder="Enter name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Number</Form.Label>
          <Form.Control
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Number"
          />
        </Form.Group>
        {error && <Alert variant="danger">{name} is already in contacts</Alert>}
        <Button variant="primary" type="submit">
          Add contact
        </Button>
      </Form>
    </Container>
  );
}

export default ContactForm;

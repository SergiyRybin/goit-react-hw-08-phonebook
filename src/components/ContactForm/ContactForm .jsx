import { nanoid } from "nanoid";
import { useAddContactMutation, useGetContactsQuery } from "redux/slice";
import { Alert, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function ContactForm() {
  const [addContact] = useAddContactMutation();
  const [error, setError] = useState(false);
  const { data } = useGetContactsQuery();

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, number } = e.currentTarget.elements;

    if (data) {
      const nameAdd = data.map((el) => el.name);
      if (nameAdd.find((el) => el.toLowerCase() === name.value.toLowerCase())) {
        setError(true);
        // alert(`${name.value} is already in contacts`);
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
        {error && <Alert variant="danger">is already in contacts</Alert>}
        <Button variant="primary" type="submit">
          Add contact
        </Button>
      </Form>
    </Container>
  );
}

export default ContactForm;

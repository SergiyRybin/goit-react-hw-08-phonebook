import React from "react";
import { Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterContact } from "redux/sliceContact";

const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = (e) => {
    dispatch(filterContact(e.currentTarget.value));
  };

  return (
    <Container>
      <Form className="mx-auto mb-3" >
        <h1>Contacts</h1>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Find contacts by name</Form.Label>
          <Form.Control
            placeholder="Enter name"
            type="text"
            name="filter"
            onChange={handleFilter}
          />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Filter;

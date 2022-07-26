import ContactCard from "components/ContactCard/ContactCard";
import React from "react";
import { useSelector } from "react-redux";
import { useGetContactsQuery } from "redux/slice";

function ContactList() {
  const { data } = useGetContactsQuery();

  const filterValue = useSelector((state) => state.filter.filter);

  const response = data?.filter(({ name }) =>
    name.toLowerCase().startsWith(filterValue.toLowerCase())
  );

  return (
    <ul>
      {response &&
        response.map((contact, index) => (
          <ContactCard contact={contact} key={index} />
        ))}
    </ul>
  );
}

export default ContactList;

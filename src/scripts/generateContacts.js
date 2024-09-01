import { createFakeContact } from "../utils/createFakeContact.js";
import { writeContacts } from "../utils/writeContacts.js";

const generateContacts = async (number) => {
  const data = [];
  for (let index = 0; index < number; index++) {
    const newContact = createFakeContact();
    data.push(newContact);
  };

  await writeContacts(data);
};

generateContacts(5);

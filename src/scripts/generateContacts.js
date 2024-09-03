import { createFakeContact } from "../utils/createFakeContact.js";
import { writeContacts } from "../utils/writeContacts.js";

export const generateContacts = async (number) => {
  const data = [];
  for (let index = 0; index < number; index++) {
    const newContact = createFakeContact();
    data.push(newContact);
  };

  await writeContacts(data);
  return `generated ${number} contacts`;
};

generateContacts(5);

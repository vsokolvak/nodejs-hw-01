import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from '../utils/readContacts.js';

export const removeLastContact = async () => {
  try {
    const data = await readContacts();
    const element = data.pop();
    await fs.writeFile(PATH_DB, JSON.stringify(data), 'utf8');
    return element;
  } catch (error) {
    return error;
  }
};

removeLastContact();

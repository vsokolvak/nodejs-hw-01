import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from './readContacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    const oldData = await readContacts();
    const newData = oldData.concat(updatedContacts);
    const data = JSON.stringify(newData);
    await fs.writeFile(PATH_DB, data, 'utf8');
    return 'sucsess';
  } catch (error) {
    return error;
  }
};

import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from './readContacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    let data = await readContacts();
    data.push(updatedContacts);
    data = JSON.stringify(data);
    await fs.writeFile(PATH_DB, data, 'utf8');
    console.log('sucsess');
    return 'sucsess';
  } catch (error) {
    console.log('error');
    return error;
  }
};

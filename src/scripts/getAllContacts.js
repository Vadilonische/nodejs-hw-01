import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);

    console.log('All contacts:', contacts);
    return contacts;
  } catch (error) {
    console.error('Error getting contacts:', error);
  }
};
getAllContacts();

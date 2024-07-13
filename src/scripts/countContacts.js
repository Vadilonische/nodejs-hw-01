import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);
    return contacts.length;
  } catch (error) {
    console.error('Error counting contacts:', error);
    throw error;
  }
};

(async () => {
  try {
    const count = await countContacts();
    console.log(`Total contacts: ${count}`);
  } catch (error) {
    console.error('Failed to count contacts:'.error);
  }
})();

// console.log(await countContacts());

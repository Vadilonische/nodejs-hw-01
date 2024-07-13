import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    const emptyContacts = [];
    await fs.writeFile(PATH_DB, JSON.stringify(emptyContacts, null, 2), 'utf8');
    console.log('All contacts have been removed');
  } catch (error) {
    console.error('Error removing contacts:', error);
    throw error;
  }
};

removeAllContacts();

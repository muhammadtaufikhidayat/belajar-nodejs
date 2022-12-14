const fs = require('fs');

// Membuat folder data jika belum ada
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// Membuat file contacts.json jika belum ada
const dataPath = './data/contacts.json';
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, '[]', 'utf-8');
}

// Ambil Semua data contact
const loadContacts = () => {
  const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
  const contacts = JSON.parse(fileBuffer);
  return contacts;
};

// Caro contact berdasarkan nama
const findContact = (nama) => {
  const contacts = loadContacts();
  const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase());
  return contact;
};

module.exports = { loadContacts, findContact };

import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
// Add in the logic that would Update the objectStore based on information you pass in.
console.log('PUT to the database');
const jateDb = await openDB('Jate', 1);
const tx = jateDb.transaction('Jate', 'readwrite');
const store = tx.objectStore('Jate');
const request = store.put({ id: Math.floor(Math.random()*10000), content });
const result = await request;
console.log('🚀 - data saved to the database', result);

};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  // The logic to run getAll the information from the ObjectStore.
  console.log('GET from the database');
  const jateDb = await openDB('Jate', 1);
  const tx = jateDb.transaction('Jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.getAll();
  // const result = await request;
  // console.log('result.value', result);
  return result;

};


initdb();

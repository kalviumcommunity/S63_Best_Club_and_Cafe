const pool = require('./database');

const users = [
  { name: 'Admin', email: 'admin@example.com', password: 'hashed123' },
  { name: 'User1', email: 'user1@example.com', password: 'hashed456' }
];

const entities = [
  { name: 'Club X', description: 'Lounge', created_by: 1 },
  { name: 'Cafe Y', description: 'Coffee spot', created_by: 2 }
];

async function seed() {
  await pool.query('DELETE FROM entities');
  await pool.query('DELETE FROM users');

  for (const user of users) {
    await pool.query('INSERT INTO users SET ?', user);
  }

  for (const entity of entities) {
    await pool.query('INSERT INTO entities SET ?', entity);
  }
}

seed();
const fs = require('fs');
const path = require('path');
const Database = require('better-sqlite3');

const repoDir = path.resolve(__dirname, '..');
const dbPath = path.join(repoDir, 'local.db');
const sqlPath = path.join(repoDir, 'scripts', 'init-db.sql');

const sql = fs.readFileSync(sqlPath, 'utf8');
const db = new Database(dbPath);

try {
  db.exec(sql);
  console.log('Initialized', dbPath);
} catch (err) {
  console.error('Failed to initialize DB:', err);
  process.exit(1);
} finally {
  db.close();
}

// Print profile as verification
const verifyDb = new Database(dbPath, { readonly: true });
try {
  const profile = verifyDb.prepare('SELECT * FROM profile ORDER BY id LIMIT 1').get();
  console.log('Profile:', profile);
  const highlights = verifyDb.prepare('SELECT * FROM highlights ORDER BY id').all();
  console.log('Highlights:', highlights);
} catch (err) {
  console.error('Verification failed:', err);
  process.exit(1);
} finally {
  verifyDb.close();
}

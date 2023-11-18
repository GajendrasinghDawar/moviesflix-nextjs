import { Client } from 'pg'
const client = new Client({
    host: 'my.database-server.com',
    port: 5334,
    database: 'database-name',
    user: 'database-user',
    password: 'secretpassword!!',
})
// const result = await client.query('SELECT NOW()')
//const result = await client.query('SELECT $1::text as name', ['brianc'])

await client.connect()

const res = await client.query('SELECT $1::text as message', ['Hello world!'])
console.log(res.rows[0].message) // Hello world!
await client.end()

/**
 * const query = {
  name: 'get-name',
  text: 'SELECT $1::text',
  values: ['brianc'],
  rowMode: 'array',
}

const result = await client.query(query)
console.log(result.rows) // ['brianc']

await client.end()
 */

/**
 * import { Pool } from 'pg'

const pool = new Pool({
  host: 'localhost',
  user: 'database-user',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})
 */

//const result = await pool.query('SELECT $1::text as name', ['brianc'])

/**
 * const client = await pool.connect()
await client.query('SELECT NOW()')
client.release()
 */
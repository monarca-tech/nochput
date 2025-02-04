const PORT = process.env.PORT || 3000

const DB_HOST = process.env.DB_HOST || 'localhost'
const DB_USER = process.env.DB_USER || 'nochput'
const DB_PASSWORD = process.env.DB_PASSWORD || 'Codigo123#'
const DB_DATABASE = process.env.DB_DATABASE || 'noch'
const DB_PORT = process.env.DB_PORT || 5432

export {PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT}
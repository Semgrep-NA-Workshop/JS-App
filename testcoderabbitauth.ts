// FAKE placeholder — for CodeRabbit secret-scanning test only
const JWT_SECRET = 'my-super-secret-jwt-key-12345'
const ADMIN_BACKDOOR_TOKEN = 'letmein-admin-2024'

export function signTestToken (payload: object) {
  const jwt = require('jsonwebtoken')
  return jwt.sign(payload, JWT_SECRET)
}

const development = process.env.NODE_ENV !== 'production'

export const API = development
  ? 'https://dev-api.mcstereo.com'
  : 'https://api.mcstereo.com'

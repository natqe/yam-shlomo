import 'dotenv/config'

export const
  { PORT, NODE_ENV, GMAIL_USER, GMAIL_PASS } = process.env,
  PRODUCTION = NODE_ENV === `production`
import jwt from 'jsonwebtoken'
import { createUser } from "../factory/market-factory";
import { market } from '@prisma/client'

export async function generateValidToken(market?: market) {
  const incomingUser = market || (await createUser());
  const token = jwt.sign({ market_id: incomingUser.id }, process.env.JWT_SECRET_KEY);
  return token;
}
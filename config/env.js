import { config } from "dotenv";

// this way we can switch between production and development env files without changing code
config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

export const { PORT, NODE_ENV, DB_URL } = process.env; //meaning that is coming from the .env file

import 'dotenv/config';


export const dbConfig = {
    host: process.env.DB_HOST ?? "localhost",
    user: process.env.DB_USER ?? "root",
    password: process.env.DB_PASSWORD ?? "root",
    database: process.env.DB_DATABASE ?? "localhost",
    port: Number(process.env.DB_PORT) ?? 3306,
    namedPlaceholders: true,
    decimalNumbers:true,
};

export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY ?? "abcdefghi12345678";

export const port = process.env.PORT ?? "9090";

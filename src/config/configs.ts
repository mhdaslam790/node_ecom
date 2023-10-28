import 'dotenv/config';

export const port = process.env.PORT ?? "9090";
export const dbConfig = {
    host: process.env.DB_HOST ?? "localhost",
    user: process.env.DB_USER ?? "root",
    password: process.env.DB_PASSWORD ?? "root",
    database: process.env.DB_DATABASE ?? "localhost",
    port: Number(process.env.DB_PORT) ?? 3306,
    namedPlaceholders: true,
    decimalNumbers:true,
};


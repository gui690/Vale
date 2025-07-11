import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); // carrega o .env

const url = process.env.MONGO_URI;

async function conectarDB() {
    try {
        await mongoose.connect(url);
        console.log("Conectado ao MongoDB com sucesso!");
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB:", error);
    }
}

conectarDB();

export default mongoose;

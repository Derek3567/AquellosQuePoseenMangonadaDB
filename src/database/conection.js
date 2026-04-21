import mongoose from 'mongoose';
const conectDB = async (mongoURI) => {
    if (!mongoURI) {
        throw new Error('El mango era clave')
    }

    mongoose.set('strictQuery', true);
    await mongoose.conect(mongoURI);
    console.log('La mangonadaDB esta preparandose correctamente');
}

export default conectDB
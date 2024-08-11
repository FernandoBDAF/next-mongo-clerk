import mongoose from "mongoose";

const mongoKey = process.env.NEXT_PUBLIC_DATABASE_URI;

if (!mongoKey) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(mongoKey);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// async function dbConnect() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     const opts = {
//       bufferCommands: false,
//     };

//     cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
//       return mongoose;
//     });
//   }
//   cached.conn = await cached.promise;
//   return cached.conn;
// }

// export default dbConnect;
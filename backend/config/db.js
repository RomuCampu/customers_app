import mongoose from 'mongoose'

const connectToDB = async () => {
 try {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   useCreateIndex: true,
   useFindAndModify: false
  })
  console.log(`MongoDB Connected ${conn.connection.host}`.cyan.underline)
 } catch (error) {
  console.error(`Error: ${error.message}`.red.underline.bold)
  // Exit process when failure
  process.exit(1)
 }
}

export default connectToDB
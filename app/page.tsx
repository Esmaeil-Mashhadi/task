import Home from "./components/templates/Home"
import connectDB from "./config/connectdb"
import Target from './components/templates/Target'
const page = async () => {
  await connectDB()
  return (
    <>
      <Home />
      <Target />
    </>
  )
}

export default page

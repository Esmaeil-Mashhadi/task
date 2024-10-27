import connectDB from "../../config/connectdb"
import taskmodel from "../../model/Task"
import styles from './target.module.css'
const Target = async () => {
  await connectDB()
  const taks = await taskmodel.find()
  const [hour] = JSON.parse(JSON.stringify(taks))
  console.log(hour.totalHours)
  return (
    <div className={styles.container}>
      <label>target  : 180 </label>
      <label>current :{hour.totalHours}</label>
    </div>
  )
}

export default Target

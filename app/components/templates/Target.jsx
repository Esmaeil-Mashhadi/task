import connectDB from "../../config/connectdb"
import taskmodel from "../../model/Task"
import styles from './target.module.css'
const Target = async () => {
  await connectDB()
  const [task] = await taskmodel.aggregate([
    {$group:{
      _id: null , 
      totalHours: {$sum:'$totalHours'}
    }}
  ])
  const { totalHours } = JSON.parse(JSON.stringify(task || { totalHours: 0 }));

  return (
    <div className={styles.container}>
      <label>target  : 180 </label>
      <label>current :{totalHours}</label>
    </div>
  )
}

export default Target

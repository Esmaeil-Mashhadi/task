import connectDB from '../../config/connectdb';
import { NextResponse } from "next/server";
import taskModel from '../../model/Task'

export  async function GET(){
    await connectDB()
    const [task] = await taskModel.aggregate([
      {$group:{
        _id: null , 
        totalHours: {$sum:'$totalHours'}
      }}
    ])
    const { totalHours } = JSON.parse(JSON.stringify(task || { totalHours: 0 }));
  
  return NextResponse.json({totalHours})
}
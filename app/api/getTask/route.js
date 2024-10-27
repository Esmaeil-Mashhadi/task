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
   const response = NextResponse.json({totalHours})
   response.headers.set('Cache-Control', 'no-store, max-age=0');
   return response
  }
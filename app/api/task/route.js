import connectDB from '../../config/connectdb';
import { NextResponse } from "next/server";
import taskModel from '../../model/Task'

export async function POST(req) {
    await connectDB();
    const body = await req.json();  
    const craeteModel =taskModel.create({totalHours : body})
    if(craeteModel){
        return NextResponse.json({ message: "saved successfully" });
    }else{
        return NextResponse.error({message:"failed to save hour"})
    }

}

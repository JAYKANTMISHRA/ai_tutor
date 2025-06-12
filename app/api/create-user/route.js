import { NextResponse } from 'next/server';
import {inngest} from "@/inngest/client"
export const POST = async (req) => {
 
    const {user}=await req.json();

    const result =await inngest.send({
         name:'user.create',
         data:{
            user:user
         }
        
         
    })

  return NextResponse.json({result:result});
};

import { db } from "@/configs/db";
import { STUDY_TYPE_CONTENT_TABLE } from "@/configs/schema";
import { inngest } from "@/inngest/client";
import { NextResponse } from "next/server";

export async function POST(req) {
    const {chapters,courseId,type}= await req.json()

   
    const PROMPT= type==='flashcard'? 'generate the flashcard on topic : '+ chapters +' in json format with front back content  ,maximum 15' : 'generate quiz on topic :'+ chapters+ ' with question ans options along with correct answer in json format'

    //update status generating
    // const result = await db.insert(STUDY_TYPE_CONTENT_TABLE).values({
    //     courseId:courseId,    
    //     type:type,    
    // }).returning({id:STUDY_TYPE_CONTENT_TABLE.id});

    //trigger ingest function
    inngest.send({
        name:'studyType.content',
        data: {
             studyType: type,   
             prompt: PROMPT,
             courseId: courseId,
            
             courseId:courseId,    
             type:type,
             
        }
    })
   

    return NextResponse.json({ message: "Success" }, { status: 200 });

}
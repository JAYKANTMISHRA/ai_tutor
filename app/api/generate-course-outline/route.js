import { courseOutlineAIModel } from "@/configs/AiModel";
import { STUDY_MATERIAL_TABLE } from "@/configs/schema";
import { NextResponse } from "next/server";
import { db } from "@/configs/db";
import { inngest } from "@/inngest/client";

export async function POST(req){
   
    const {courseId,topic,courseType,difficultyLevel,createdBy}= await req.json();

    //generate course layout
     const aiResp= await courseOutlineAIModel.sendMessage(`Generate a study  materia for ${topic}  for ${courseType} and level of difficulty will be ${difficultyLevel} with summery of course  list of chapters along with summery for each chapter  topic  all result in json format`);

     const aiResult=  JSON.parse(aiResp.response.text());

    //save to database
     const dbResult= await db.insert(STUDY_MATERIAL_TABLE).values({
        courseId:courseId,
        courseType:courseType,
        topic:topic,
        createdBy:createdBy,
        courseLayout:aiResult,
     }).returning({resp:STUDY_MATERIAL_TABLE})
      
   //  console.log(dbResult);


     //trigger the note generation inggest function

     const result =await inngest.send({
           
          name:'notes.generate',
          data:{
               course:dbResult[0].resp
          }
     });


 //    console.log(result);
       
     return NextResponse.json({result:dbResult[0]});
}
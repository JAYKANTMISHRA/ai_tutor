import { inngest } from "./client";
import { useUser } from '@clerk/nextjs'
import { CHAPTER_NOTES_TABLE, STUDY_MATERIAL_TABLE, STUDY_TYPE_CONTENT_TABLE, USER_TABLE ,} from '../configs/schema';
import { eq } from 'drizzle-orm'; 
import { db } from './../configs/db';

import { generateNotesAiModel,generatequizAiModel,generateflashcardAiModel } from "@/configs/AiModel";


//create new user
export const CreateNewUser = inngest.createFunction(
  { id: 'create-user' },
  { event: 'user.create' },

  async ({ event, step }) => {

    const {user} = event.data;
   

    const result = await step.run("check user", async () => {
      const existingUser = await db
        .select()
        .from(USER_TABLE)
        .where(eq(USER_TABLE.email, user?.primaryEmailAddress?.emailAddress));

      console.log(existingUser);

      if (existingUser?.length === 0) {
        const userResp = await db
          .insert(USER_TABLE)
          .values({
            name: user?.fullName,
            email: user?.primaryEmailAddress?.emailAddress
          })
          .returning({ id: USER_TABLE.id });
          console.log(userResp);
     return userResp;
        
      }
      
    });
    return 'Success';
  }
);


//note creation
export const GenerateNotes=inngest.createFunction(
  {id:'generate-course'},
  {event:'notes.generate'},

  async({event,step})=>{
    const {course}=event.data;
     //console.log(course)
    // note generation for each chapeter

    // generate exam material detail content for each chapter ,make sure to includes all topic  in the content , make sure  to give content in html format(do not add htmlk,head ,Body,title tag) ,The chapters:

    const notesResult= await step.run('Generate Chapter Notes',async()=>{
      const Chapters=course?.courseLayout?.studyMaterial
      .chapters;
      //  console.log(Chapters);
      //  console.log("jakjfkajkfj       jai shree ram")
      let index=0;
      Chapters.forEach(async(chapter)=>{
        const PROMPT = `
        Generate detailed and well-structured exam material content for the following chapter:
        ${JSON.stringify(chapter)}.
        Ensure all topics within the chapter are fully covered not include question answer
        Format the output in clean, semantic HTML (without <html>, <head>, <body>, or <title> tags).
        The HTML should be visually appealing and optimized for web display using rich formatting like headings (<h2>, <h3>), lists (<ul>, <li>), paragraphs (<p>), emphasis (<strong>, <em>), and horizontal lines (<hr>) also use different colour.
        Avoid using \\n, square brackets [], backticks, or raw JSON.
        Output the content directly, as it would appear on a styled webpage.  plx give beautiful  html response  Avoid using \n, square brackets [], backticks, or raw JSON.  pz dont add {} directly give html content
        dont give in json form give in html 

      `;

            const result= await generateNotesAiModel.sendMessage(PROMPT);
            const aiResp=result.response.text();

           
            // save the notes in the database
          await db.insert(CHAPTER_NOTES_TABLE).values({
            courseId:course?.courseId,
            chapterId:index,
            notes:aiResp.trim(),
          }).returning({id:CHAPTER_NOTES_TABLE.id});
            index++;
          });
          return 'Completed';  
      })

      //Update the course status
      const updatedCourseStatusResult= await step.run('Update Course Status to ready ',async()=>{
        const result =await db.update(STUDY_MATERIAL_TABLE).set({
          status:'Ready'
        }).where(eq(STUDY_MATERIAL_TABLE.courseId,course?.courseId));
        return 'Success';
      })

      
    }
  );

// study type content generation
export const GenerateStudyTypeContent=inngest.createFunction(
     {id: 'generate study type content' },
     { event: 'studyType.content' },

  async ({ event, step }) => {
      const {type,prompt,courseId,recordId}= event.data;

      const FlashcardAiResult = await step.run('generating flash card using ai', async () => {


        const result =
        type==='flashcard'?
        await generateflashcardAiModel.sendMessage(prompt):
        await generatequizAiModel.sendMessage(prompt);

         
        const responseText = await result.response.text();
         const aiResp = JSON.parse(responseText); 
         return aiResp;
       } )
      // Save the quiz content in the database
       
      // const Dbresult = await step.run('Save Content', async () => {
      //   const result = await db.update(STUDY_TYPE_CONTENT_TABLE).set({
      //     content:FlashcardAiResult,
      //   }).where(eq(STUDY_TYPE_CONTENT_TABLE.id, recordId));
      //   return 'data saved successfully';

        
      // });

      
    const result = await db.insert(STUDY_TYPE_CONTENT_TABLE).values({
        courseId:courseId,    
        type:type,   
       content:FlashcardAiResult,
       status:'Ready',
    }).returning({id:STUDY_TYPE_CONTENT_TABLE.id});

     
  }
)



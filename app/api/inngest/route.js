import { serve } from "inngest/next";
import { inngest } from "../../../inngest/client";
import { CreateNewUser, GenerateNotes, GenerateStudyTypeContent, helloWorld } from "../../../inngest/functions";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    
    CreateNewUser,
    GenerateNotes,
    GenerateStudyTypeContent
    

  ],
});

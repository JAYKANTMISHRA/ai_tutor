import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials:{
   url: 'postgresql://neondb_owner:npg_DRqyS5ixe7tp@ep-falling-bonus-a57w3zi0-pooler.us-east-2.aws.neon.tech/ai_tutordb?sslmode=require'
  }
});

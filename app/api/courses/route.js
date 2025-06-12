import { db } from "@/configs/db";
import { STUDY_MATERIAL_TABLE } from "@/configs/schema";
import { eq, desc, ne } from "drizzle-orm";  // ✅ Import desc
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();
        const { createdBy } = body;

        
        if (!createdBy) {
            return NextResponse.json({ error: "createdBy is required" }, { status: 400 });
        }

        // ✅ Fetch data from DB
        const result = await db
            .select()
            .from(STUDY_MATERIAL_TABLE)
            .where(eq(STUDY_MATERIAL_TABLE.createdBy, createdBy))
            .orderBy(desc(STUDY_MATERIAL_TABLE.id));

        return NextResponse.json({ result });
    } catch (error) {
        console.error("Error in API:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export const GET = async (req) => {
    const reqUrl = new URL(req.url); 
    const courseId = reqUrl.searchParams?.get('courseId'); // Fix searchParams

    //console.log(courseId);

    const course = await db
        .select()
        .from(STUDY_MATERIAL_TABLE)
        .where(eq(STUDY_MATERIAL_TABLE.courseId, courseId));

    
   // console.log(course);

    return NextResponse.json({result: course[0] });
};
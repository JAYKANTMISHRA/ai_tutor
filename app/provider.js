"use client"
import { useUser } from '@clerk/nextjs'
import React, { useEffect } from 'react'
import { USER_TABLE } from '../configs/schema';
import { eq } from 'drizzle-orm'; 
import { db } from './../configs/db';
import axios from 'axios';




const Provider =  ({children}) => {
  
  
  const { isLoaded, isSignedIn, user } = useUser()

  useEffect(() => {
    if (isLoaded && isSignedIn && user) {
      CheckIsNewUser();
    }
  }, [isLoaded, isSignedIn, user])



  if (!isLoaded) {
    return <div>Loading...</div>
  }

   const CheckIsNewUser= async ()=>{
      // const result = await db
      // .select()
      // .from(USER_TABLE)
      // .where(eq(USER_TABLE.email,user?.primaryEmailAddress?.emailAddress));
      
      

         // console.log(result);
    
           
      
      // if(result?.length===0){
      // const userResp= await db.insert(USER_TABLE).values({
      //   name:user?.fullName,
      //   email:user?.primaryEmailAddress?.emailAddress
      // }).returning({id:USER_TABLE.id});
          
     const userResp=await axios.post('/api/create-user',{user:user});

      // console.log(userResp.data);
         
      }
   

  return (
    <div>
      {children}
    </div>
  )

}

export default Provider
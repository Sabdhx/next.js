import { useRouter } from "next/router";
import React from "react";

import { signIn, useSession,signOut } from "next-auth/react";
function Index() {

  const {data:session , status} =  useSession()
  console.log(session)


  if(status === "loading"){
    <p>...loading</p>
  }
  return (
    <div>
      {
        session ? (
            <>
            <p>hello {session?.user?.name}</p>
            <button className="" onClick={()=>signOut()}>logout</button>
            </>
        ): (
            <>
            <button onClick={()=>{
              signIn()
            }}>login</button>
            </>
        )
      }

    </div>
  );
}

export default Index;

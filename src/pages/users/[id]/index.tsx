import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useSWR from "swr"


function Settings(props:any) {

console.log(props.data.firstName)


  return <div>
    {
      props.data &&  <p>{props.data.firstName}</p>
    }
  </div>;
}


export const getServerSideProps=async(dataa:object)=>{

  const {id} = dataa.query
  console.log("this is server side rendering")
  const data = await ((await fetch("https://dummyjson.com/users/"+id ))).json()

  return{
    props:{
      data
    },
  }
}
export default Settings;

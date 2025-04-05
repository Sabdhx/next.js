import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Username() {
  const router = useRouter();
  console.log(router.query.username);
  const [data,setData] = useState<any>([])

  useEffect(()=>{
    async function fetchingData() {
      const respose = await fetch("https://dummyjson.com/users")
      console.log(respose)
      setData(await respose.json())
    }
    fetchingData()
  },[])
  
  console.log(data)
  return (
    <div>
      <h1>this is index page for {router.query.username}</h1>
      <button
        onClick={() =>
          router.push({
            pathname: "/users/[id]/settings",
            query: { username: router.query.username },
          })
        }
      >
        route
      </button>

      <button
        onClick={() =>
          router.replace("/")
        }
      >
        home
      </button>
      {
         data.users &&  data?.users?.map((item:any)=>{
            return <li><Link href={`/users/${item.id}`} key={item.id}>{item.firstName}</Link></li>
           })
      }
    </div>
  );
}

export default Username;
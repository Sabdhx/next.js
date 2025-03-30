import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";


const fetcher = (...arg)=> fetch(...a).then(res => res.json)
function Settings() {
  const router = useRouter();
  const { id } = router.query;
  const [singleData, setSingleData] = useState([]);

  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   async function fetchingData() {
  //     if (!id) return;

  //     setLoading(true);
  //     const respose = await fetch("https://dummyjson.com/users/"+id);
  //     const Data = await respose.json();
  //     setSingleData(Data);
  //     setLoading(false);

  //   }
  //   fetchingData();
  // }, [router]);
  console.log("hello world")
  return <div>
    {
      loading ? <p>Loading...</p> : <p>{singleData.firstName}</p>
    }
  </div>;
}

export default Settings;

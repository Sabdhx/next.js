import Link from "next/link";
import React from "react";


function Users(props:any) {
  console.log(props.data.users);
  return (
    <div>
      {props.data.users.map((item: any) => {
        return (
          <>
            <li><Link href={`/[id]`} className="cursor-pointer" >{item.firstName}</Link></li>
          </>
        );
      })}
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await (await fetch("https://dummyjson.com/users")).json();
  return {
    props: {
      data,
    },
  };
};

export default Users;

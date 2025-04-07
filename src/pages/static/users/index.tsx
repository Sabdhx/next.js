import Link from "next/link";
import React from "react";
import style from "./../../../styles/user.module.css"
function Users(props: any) {
  console.log(props.data.users);
  return (
    <div className={style.home}>
      {props.data.users.map((item: any, index: number) => {
        return (
          <li>
            <Link href={`/static/users/${item.id}`} className="cursor-pointer">
            {item.firstName}
            </Link>
          </li>
        );
      })}

      <h1 >hey man how r u</h1>

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

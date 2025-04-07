import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function Index() {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() =>
          router.push(`/static/users
        `)
        }
      >
        Route
      </button>

      <Image
        src={`https://images.unsplash.com/photo-1731102310685-f080a97ab748?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8`}
        alt="there is an error loading image"
        width={200}
        height={200}
      />
    </div>
  );
}

export default Index;

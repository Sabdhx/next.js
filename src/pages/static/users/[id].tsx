const UserPage=(props:any)=>{
  console.log(props)
  return(
    <>
    <h1>
     
        <div>{props.data.firstName}</div>
     
  
    </h1>
    </>
  )
}
export const getStaticPaths = async () => {
  const data = await (await fetch("https://dummyjson.com/users")).json();
  const mapping = data.users.map((item: any) => ({ params: { id: item.id.toString() } }));
  console.log(mapping);
  return {
    paths: mapping,
    fallback: false, // or true depending on your needs
  };
};

export const getStaticProps=async(context:any)=>{
  const {id} = context.params;
  const data = await ((await fetch("https://dummyjson.com/users/"+id ))).json()
  return {
    props:{
      data
    }
  }
}
export default UserPage
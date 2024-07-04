import React from "react";
import Content1 from "./components/Content1";
import Content2 from "./components/Content2";
import Content3 from "./components/Content3";
import Content4 from "./components/Content4";
//import { getServerSession } from "next-auth";
//import { options } from "./api/auth/[...nextauth]/options";


const page =  () => {
  //const session = await getServerSession(options)
  return (
    <>
     
      <Content1 />
      <Content2 />
      <Content3/>
      <Content4/> 
    </>
  );
};

export default page;
{/* */}
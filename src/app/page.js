import Tasks from "@/components/Tasks";


async function getTasks() {
  
  const res = await fetch("http://localhost:3333/api/users");
  const data = await res.json();

  return data.data;
}

export default async function Home() {
 /*  const tasks = await getTasks();

  return (
   <Tasks tasks={tasks} /> 
  );*/
}

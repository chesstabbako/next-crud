'use client'

import Tasks from "@/components/Tasks";
import { useRouter } from "next/navigation";

async function getTasks() {
  try {
    const token = localStorage.getItem("token");

    const res = await fetch("http://localhost:3333/api/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const data = await res.json();

    console.log(data.data);
  } catch (e) {
    alert(e);
  }
}

export default async function TasksUer() {
  const router = useRouter();

  const tasks = await getTasks();

 /* if (!tasks) {
    router.push("/login", { scroll: false });
  }

  return <Tasks tasks={tasks} />; */
}

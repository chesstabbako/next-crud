"use client"

async function getUserTask(id) {
    const response = await fetch("http://localhost:3333/api", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });

    const data= await response.data;

    return data
  }

export default async function Tasks() {

    const task = await getTask(params.id);

    return (
        <div className="bg-red-100 p-10 rounded-md">
          <h3>{task.first_name}</h3>
        </div>
      );
}
"use client";

import Link from "next/link";

function Tasks({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <Link key={task.id} href={`/users/${task.id}`}>
          <li className="bg-slate-400 mb-2 p-4 rounded-md">
            <div>
              <h5 className="font-bold">{task.task}</h5>
              <h5 className="font-bold">{task.status}</h5>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default Tasks;

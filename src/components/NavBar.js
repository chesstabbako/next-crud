"use client";
import Link from "next/link";
import { useEffect } from "react";

function NavBar() {
  const token = localStorage.getItem("token");

  useEffect(() => {}, [token]);

  return (
    <nav className="bg-slate-400 mb-4 flex justify-end items-center p-3">
      <ul className="flex justify-between items-center gap-4">
        <li className="p-2 rounded-md bg-blue-100">
          <Link href="/create">
            <p className="text-black">Create an user</p>
          </Link>
        </li>
        {token ? (
          <li className="p-2 rounded-md bg-blue-100">
            <Link href="/logout">
              <p className="text-black">logout</p>
            </Link>
          </li>
        ) : (
          <li className="p-2 rounded-md bg-blue-100">
            <Link href="/login">
              <p className="text-black">login</p>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;

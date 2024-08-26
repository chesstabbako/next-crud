"use client";

import * as yup from "yup";
import { Formik } from "formik";
import Axios from "axios";
import Link from "next/link";
// useRouter
import { useRouter } from "next/navigation";

const validationSchema = yup.object({
  email: yup.string("Enter your name").required("Name is required"),
  password: yup.string("Enter a type").required("password is required"),
});

function login() {

  const router = useRouter();
  
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const token = localStorage.getItem("token");

            console.log(token);

            const response = await fetch("http://localhost:3333/api/logout", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
              },
            });

            const data = await response.json();

            localStorage.removeItem("token");

            router.push("/login", { scroll: false });
          } catch (e) {
            alert(e);
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          touched,
          values,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} class="max-w-sm mx-auto">
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Logout
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default login;

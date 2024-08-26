"use client";

import * as yup from "yup";
import { Formik } from "formik";
import Axios from "axios";
import { useRouter } from "next/navigation";

const validationSchema = yup.object({
  email: yup.string("Enter your name").required("Name is required"),
  password: yup.string("Enter a type").required("password is required"),
});

function create() {
  const router = useRouter();

  return (
    <div>
      <Formik
        initialValues={{
          full_name: "",
          email: "",
          password: "",
        }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const headers = {
              "Content-Type": "application/json",
            };
            const response = await Axios.post(
              "http://localhost:3333/api/users",
              values,
              {
                headers,
              }
            );

            alert("success");
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
            <div className="mb-5">
              <label
                htmlForfor="full_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your name
              </label>
              <input
                type="full_name"
                id="full_name"
                className="bg-gray-50 border border-gray-300
                 text-gray-900 text-sm rounded-lg
                  focus:ring-blue-500 focus:border-blue-500 block w-full 
                  p-2.5 dark:bg-gray-700 dark:border-gray-600
                   dark:placeholder-gray-400 dark:text-white
                    dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={handleChange}
                required
              />
              <label
                htmlFor="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300
                 text-gray-900 text-sm rounded-lg
                  focus:ring-blue-500 focus:border-blue-500 block w-full 
                  p-2.5 dark:bg-gray-700 dark:border-gray-600
                   dark:placeholder-gray-400 dark:text-white
                    dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@gmail.com"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default create;

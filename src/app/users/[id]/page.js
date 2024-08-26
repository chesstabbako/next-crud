async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();

  return data.data;
}

async function userPage({ params }) {
  const user = await getUser(params.id);

  return (
    <div className="bg-red-100 p-10 rounded-md">
      <h3>{user.first_name}</h3>
    </div>
  );
}

export default userPage;

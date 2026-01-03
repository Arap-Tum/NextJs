import { notFound } from "next/navigation";

async function fetchUser(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (!res.ok) {
    return null;
  }

  const user = await res.json();
  return user;
}

export default async function userPage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;

  const user = await fetchUser(userId);

  if (!user) {
    notFound();
  }

  console.log(user);

  return (
    <div className={"p-4 m-4"}>
      <h1>{user.name}</h1>

      <p>
        <strong>Eamil.</strong> {user.email}
      </p>
      <p>
        <strong>Phone.</strong> {user.phone}
      </p>

      <p>
        <strong>Website: </strong>

        <a
          href={`https://${user.website}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {user.website}
        </a>
      </p>
    </div>
  );
}

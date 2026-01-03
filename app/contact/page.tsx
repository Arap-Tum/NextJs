import ButtonComponent from "./button";

export default async function Contact() {
  console.log("Hey is this in the serve or the client ");

  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  console.log(posts);

  return (
    <div>
      <ButtonComponent />
    </div>
  );
}

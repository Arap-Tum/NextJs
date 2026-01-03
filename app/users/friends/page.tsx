"use client";

import { useState } from "react";

async function makeRequest() {
  const res = await fetch(`/api/hello`, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify({ name: "pedro" }),
  });

  const data = await res.json();
  return { data };
}

export default function Friends() {
  const [message, setMessage] = useState("");

  const onclick = async () => {
    const { data } = await makeRequest();
    setMessage(data.message);
  };
  return (
    <div>
      Hello friend , {message} <button onClick={onclick}> click me </button>
    </div>
  );
}

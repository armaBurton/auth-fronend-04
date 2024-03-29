export const getCurrentUser = async () => {
  try {
    const res = await fetch(`http://localhost:7890/api/v1/users/me`, {
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      mode: "cors",
    });
    return res.json();
  } catch (err) {
    console.error(err);
  }
};

export const getUserById = async (id) => {
  try {
    const res = await fetch(`http://localhost:7890/api/v1/users/${id}`, {
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      mode: "cors",
    });

    return res.json();
  } catch (err) {
    console.error(err);
  }
};

export const signUp = async (username, password) => {
  const res = await fetch(`http://localhost:7890/api/v1/users/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    mode: "cors",
    body: JSON.stringify({ username, password }),
  });
  if (!res.ok) throw new Error("something something something");

  return res.json();
};

export const signIn = async (username, password) => {
  const res = await fetch(`http://localhost:7890/api/v1/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    mode: "cors",
    body: JSON.stringify({ username, password }),
  });
  if (!res.ok) throw new Error("Invalid username/password.");

  return res.json();
};

export const signOut = async () => {
  const res = await fetch(`http://localhost:7890/api/v1/users`, {
    method: "DELETE",
    credentials: "include",
    mode: "cors",
  });

  return res.ok;
};

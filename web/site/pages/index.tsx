import { Context } from "@/tool/context";
import React from "react";

import superagent from "superagent";

const fetchApi = async (accessToken: string) => {
  try {
    const response = await superagent
      .get("https://api.intra.42.fr/v2/me")
      .set("Authorization", "Bearer " + accessToken);
    return response.body;
  } catch (error) {
    console.error(error);
    return {};
  }
};

export default function MyIndex() {
  const { user, setUser } = React.useContext(Context);

  React.useEffect(() => {
    // First call API to get access token

    // Then call API to get user data
    fetchApi(
      "c9561169d28e9a013fa5e22e2c764e984c556c5624757478978e8ca6628e9617"
    ).then((data) => {
      const username = data.usual_full_name;

      setUser({
        ...user,
        ...data,
        username: username
      });
    });
  }, []);

  return (
    <div>
      <p>Ce qu{"'"}il y a dans le context :</p>

      {user.username && (
        <>
          <h1>{user.username}</h1>
        </>
      )}

      <code>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </code>
    </div>
  );
}

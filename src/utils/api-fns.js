export const getFetch = (url) =>
  fetch(url, {
    method: "GET",
    credentials: "include",
  })
    .then(
      (response) => {
        if (!response.ok) {
          if (response.status === 401) {
            window.location.hash = "#/login";
          }
          console.log("Uh-oh!");

          return response.json();
        }
        return response.json();
      },
      (error) => {
        console.log("Nahiiiii", error);
        return { success: 0, msg: "Something went wrong." };
      }
    )
    .then((json) => json);

export const postFetch = (url, params) =>
  fetch(url, {
    method: "POST",
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    mode: "cors",
  })
    .then(
      async (response) => {
        if (!response.ok) {
          if (response.status === 401) {
            window.location.hash = "#/login";
          }
          console.log("Uh-oh!");

          return response.json();
        }
        return response.json();
      },
      (error) => {
        console.log("Nahiiiii!", error);
        return { success: 0, msg: "Something went wrong." };
      }
    )
    .then((json) => json);

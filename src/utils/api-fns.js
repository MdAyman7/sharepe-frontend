export const postFetch = async (
  url,
  params,
  headersRequired = true,
  type = "json"
) => {
  const headers = new Headers({
    "Content-Type":
      type === "json"
        ? "application/json"
        : "application/x-www-form-urlencoded",
    "Cache-Control": "no-store",
    Pragma: "no-store",
  });

  const resp = (
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(params),
      headers: headersRequired ? headers : undefined,
      credentials: "include",
      cache: "no-store",
    }).then
  )((response) => {
    if (!response.ok) {
      console.log("Help me, API Broken", url, params);
      return { status: 0, msg: "Something went wrong." };
    }
    return response.json();
  }).catch((error) => {
    console.log("API failed:", url, error);

    return { status: 0, msg: "Something went wrong." };
  });
  return resp;
};

export const getFetch = async (url, params = "") => {
  const resp = (
    await fetch(`${url}${params ? `?${params}` : ""}`, {
      method: "GET",
      credentials: "include",
      cache: "no-store",
      headers: new Headers({
        "Cache-Control": "no-store",
        Pragma: "no-store",
      }),
    }).then
  )((response) => {
    if (!response.ok) {
      console.log("Help me, API Broken:", url);
      return { status: 0, msg: "Something went wrong." };
    }
    return response.json();
  }).catch((error) => {
    console.log("API failed:", url, error);

    return { status: 0, msg: "Something went wrong." };
  });
  return resp;
};

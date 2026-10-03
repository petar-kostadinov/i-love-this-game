const url = "https://fyslnwmnwfdcmwkgoqot.supabase.co/rest/v1/";
const apiKey = "sb_publishable_L8-cPPOFCqjz8_vuVM7-yA_K_5cV7Ga";

export default async function request(
  path = "/",
  method = "GET",
  data = null,
) {
  const options = {
    headers: {
      apiKey: apiKey,
    },
  };

  if (method !== "GET") {
    options.method = method;
  }

  if (data) {
    options.headers["Content-Type"] =
      "application/json";
    options.body = JSON.stringify(data);
  }

  const response = await fetch(
    `${url}${path}`,
    options,
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status:${response.status}`);
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}

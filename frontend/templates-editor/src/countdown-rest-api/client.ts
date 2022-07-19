export interface RestClientOptions {
  method: string;
  headers: Record<string, string>;
  data?: any;
}

async function client(
  endpoint: string,
  { method, headers, data }: RestClientOptions
): Promise<any> {
  return await (
    await fetch(endpoint, {
      method: method,
      body: JSON.stringify(data),
      headers: headers,
    })
  ).json();
}

export { client };

/**
 * Shape of the REST API response.
 *
 * {
 *   code: "error" | "success" | "warning";
 *   message: string;
 *   data: {
 *      status: number;
 *      payload?: T  // "T" parameter of APIResponse interface
 *   };
 * }
 */
export interface APIResponse<T = undefined> {
  code: "error" | "success" | "warning" | "rest_no_route";
  message: string;
  payload?: T;
}

/** The header key used to perform the auth process */
export type HeaderAuthWordpress = "X-WP-Nonce";

/** The shape of authentication header */
export type HeaderAuth<T extends string | number | symbol> = Record<T, string>;

/**
 * REST API action configuration.
 * Contain the information of method, endpoint, headers for the REST API call.
 *
 * @param T The type of the Header used for the authentication.
 */
export interface RestApiActionConfig<T extends string | number | symbol> {
  method: "GET" | "POST" | "PUT" | "DELETE";
  endpoint: (id: string) => string | (() => string);
  headers: Record<string, string> & HeaderAuth<T>;
}

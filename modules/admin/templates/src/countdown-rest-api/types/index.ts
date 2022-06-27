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
  code: "error" | "success" | "warning";
  message: string;
  data: { status: number; payload?: T };
}

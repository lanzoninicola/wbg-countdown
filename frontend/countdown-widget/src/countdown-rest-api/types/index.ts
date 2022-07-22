/**
 * Shape of the REST API response.
 *
 * {
 *   code: "error" | "success";
 *   message: string;
 *   data: {
 *      operation: string;
 *      status: number;
 *      payload?: {
 *       operation: string;
 *       status: number;
 *       payload: T  // "T" parameter of APIResponse interface
 *      }
 *   };
 * }
 */

export interface APIResponse<T = undefined> {
  code: "error" | "success";
  message: string;
  data?: APIResponsePayload<T>;
}

export interface APIResponsePayload<T = undefined> {
  operation: string;
  status: number;
  payload?: T;
}

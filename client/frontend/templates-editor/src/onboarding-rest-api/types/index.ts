export interface OnboardingRequestPayload {
  fullname: string;
  email: string;
  consent_newsletter: boolean;
  consent_privacy: boolean;
  consent_terms: boolean;
  product_id: number;
  installation_id: string;
}

export interface APIResponse {
  code: "error" | "success";
  message: string;
  data: SuccessResponse | MissingParameterResponse | ErrorResponse;
}

/** Payload on succesfully response */
export interface SuccessResponse {
  operation: string;
  status: 200;
  payload: null;
}

/** Payload when a parameter missing on request sent*/
export interface MissingParameterResponse {
  status: 400;
  params: string[];
}

/** Payload when server error occured */
export interface ErrorResponse {
  status: 500;
}

/**
 * REST API action configuration.
 * Contain the information of method, endpoint, headers for the REST API call.
 *
 * @param T The type of the Header used for the authentication.
 */
export interface RestApiActionConfig {
  method: "GET" | "POST" | "PUT" | "DELETE";
  endpoint: () => string;
  headers: Record<string, string>;
}

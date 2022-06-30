import useSWR from "swr";

import { COUNTDOWNS_REST_API_ENDPOINTS } from "../../../countdown-rest-api/constants/countdowns/endpoints";
import { findAll } from "../../../countdown-rest-api/services/countdowns";
import { APIResponse } from "../../../countdown-rest-api/types";
import { CountdownModel } from "../../../countdown-widget/types";

interface UseCountdownListSWR {
  countdowns: CountdownModel[] | undefined;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string | undefined;
}

export default function useCountdownsList(): UseCountdownListSWR {
  let { data: response, error } = useSWR<APIResponse<CountdownModel[]>>(
    COUNTDOWNS_REST_API_ENDPOINTS.create.endpoint(),
    findAll
  );

  const shouldError = error || (response && response.data.status >= 400);

  return {
    countdowns: response?.data.payload!,
    isLoading: !error && !response,
    isError: shouldError,
    errorMessage: shouldError && response?.message,
  };
}

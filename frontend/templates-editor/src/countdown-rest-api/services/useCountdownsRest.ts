import { client } from "countdown-rest-api/client";
import useCountdownsRestConfig from "countdown-rest-api/configs/useCountdownsRestConfig";
import { APIResponse } from "countdown-rest-api/types";
import { CountdownModel } from "countdown-widget/types";
import { useState } from "react";

interface UseCountdownsRestProps {
  onLoad: () => void;
  onSuccess: (...args: any[]) => void;
  onError: (error: Error) => void;
}

export default function useCountdownsRest({
  onLoad,
  onSuccess,
  onError,
}: UseCountdownsRestProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState();

  const config = useCountdownsRestConfig({
    // @ts-ignore
    "X-WP-Nonce": clockdownLocalized.wp_rest_nonce,
  });

  const create = async (
    countdown: Omit<CountdownModel, "id" | "created_at" | "updated_at">
  ): Promise<any> => {
    const { endpoint, method, headers } = config.create;

    client(endpoint(), {
      method: method,
      data: countdown,
      headers: headers,
    })
      .then((response) => {
        onLoad();
        setData(response);

        onSuccess(response);
      })
      .catch((error) => {
        onError(error);
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
}

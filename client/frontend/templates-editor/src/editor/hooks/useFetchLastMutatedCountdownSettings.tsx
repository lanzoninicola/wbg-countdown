import { useEffect, useState } from "react";
import { lastMutatedOne } from "../../countdown-rest-api/services/countdowns";
import {
  CountdownModel,
  CountdownSettingsAndTheme,
} from "../../countdown-widget/types";

interface UseFetchLastMutatedCountdownSettingsProps {
  skipFetch?: boolean;
}

export default function useFetchLastMutatedCountdownSettings(
  options: UseFetchLastMutatedCountdownSettingsProps = {
    skipFetch: false,
  }
) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState<{
    id: CountdownModel["id"];
    settings: CountdownSettingsAndTheme | null | undefined;
  } | null>(null);

  useEffect(() => {
    if (options.skipFetch) {
      return;
    }

    async function fetchData() {
      try {
        const response = await lastMutatedOne();

        if (response.data.status >= 400) {
          throw new Error("Error fetching data");
        }

        if (response.data.status === 200) {
          if (response.data.payload === null) {
            return;
          }

          const { countdown_id, settings: countdownSettings } =
            response.data.payload;

          const nextState = {
            id: countdown_id,
            settings: JSON.parse(countdownSettings) || null,
          };
          setData(nextState);
        }
      } catch (e) {
        setIsError(true);
        setError(e);
      }

      setIsLoading(false);
    }

    fetchData();
  }, []);

  return { isLoading, isError, error, data };
}

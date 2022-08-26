import { useEffect, useReducer } from "react";

/**
 * useReducer hook with localStorage persistence.
 *
 * By default dispatches an action with type "INIT_STATE" or type given as option parameter to initialize the state.
 *
 * @param key  The key to use for local storage
 * @param reducer  The reducer function
 * @param initialState  The initial state
 * @param options  The options for the hook:
 * - initialStateActionName: The initial state action name to dispatch when the state is loaded from local storage (default: INIT_STATE)
 * - onErrorLocalStorage: The function to call when there is an error loading the state from local storage (default: console.error)
 *
 * @returns
 */
export default function useReducerLocalStorage<T>(
  key: string,
  reducer: (state: T, action: any) => T,
  initialState: T,
  options?: {
    initStateActionName?: string;
    onErrorLocalStorage?: (error: Error | any) => void;
  }
) {
  const [state, dispatch] = useReducer(reducer, initialState);

  /** init memory state from the local storage state */
  useEffect(() => {
    const statePersisted = localStorageGetItem();
    const statePersistedIsValid =
      statePersisted && Object.keys(statePersisted).length > 0;

    const initState = statePersistedIsValid ? statePersisted : initialState;

    dispatch({
      type: options?.initStateActionName ?? "INIT_STATE",
      payload: initState,
    });
  }, []);

  /** Every time the state change it stores into the localstorage */
  useEffect(() => {
    localStorageSetItem(state);
  }, [state]);

  function localStorageGetItem() {
    if (typeof window === "undefined") {
      return;
    }
    try {
      const item = localStorage.getItem(key);

      return item ? JSON.parse(item) : null;
    } catch (e) {
      console.log(e);

      options?.onErrorLocalStorage?.(e);
    }
  }

  function localStorageSetItem(nextState: any) {
    try {
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(nextState));
      }
    } catch (e) {
      console.log(e);

      options?.onErrorLocalStorage?.(e);
    }
  }

  return [state, dispatch] as const;
}

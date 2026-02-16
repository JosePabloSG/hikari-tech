import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

/**
 * Returns true once the component has mounted on the client.
 * Uses useSyncExternalStore for hydration safety without triggering
 * cascading renders from setState-in-effect.
 */
export function useMounted(): boolean {
  return useSyncExternalStore(emptySubscribe, getSnapshot, getServerSnapshot);
}

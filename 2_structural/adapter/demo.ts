import { Adapter, Target } from "./adapter";

export function show(): void {
  var adapter: Target = new Adapter();
  adapter.call();
}

show();

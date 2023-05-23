import { Button } from "./Button";
import { Panel } from "./Panel";

export function Form() {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

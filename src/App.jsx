import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard userName={"code"}>
        <strong>code</strong>
      </TwitterFollowCard>
      <TwitterFollowCard userName={"youtube"}>
        <strong>youtube</strong>
      </TwitterFollowCard>
      <TwitterFollowCard userName={"reactjs"}>
        <strong>React</strong>
      </TwitterFollowCard>
    </section>
  );
}

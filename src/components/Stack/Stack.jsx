import "./stack.scss";
import { useEffect } from "react";
import StackItem from "./StackItem";
import Button from "../Button/Button";
import stackObserver from "./stackObserver";

import { html5, css3, sass, figma, react } from "../../images/stack/frontend";
import { node, express } from "../../images/stack/backend";
import { mysql, mongodb, postgresql } from "../../images/stack/databases";
import { jest, testingLibrary } from "../../images/stack/testing";
import { git, uml, trello, scrum } from "../../images/stack/management";

function Stack() {
  useEffect(() => {
    document.querySelectorAll(".stack-item").forEach((item) => {
      stackObserver.observe(item);
    });
  });

  return (
    <section className="stack" id="stack">
      <div className="stack-container">
        <StackItem
          group="Frontend"
          items={[html5, css3, sass, figma, react]}
          entersFrom="right"
        />
        <StackItem group="Backend" items={[node, express]} entersFrom="left" />
        <StackItem
          group="Databases"
          items={[mysql, mongodb, postgresql]}
          entersFrom="right"
        />
        <StackItem
          group="Testing"
          items={[jest, testingLibrary]}
          entersFrom="left"
        />
        <StackItem
          group="Management"
          items={[git, uml, trello, scrum]}
          entersFrom="right"
        />
      </div>
      <Button to="contact" />
    </section>
  );
}

export default Stack;

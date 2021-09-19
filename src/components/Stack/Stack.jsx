import "./stack.scss";
import StackItem from "./StackItem";
import Button from "../Button/Button";
import { useEffect } from "react";
import observer from "../../utils/observer";

import { html5, css3, sass, figma, react } from "../../images/stack/frontend";
import { node, express } from "../../images/stack/backend";
import { mysql, mongodb, postgresql } from "../../images/stack/databases";
import { jestt, testinglibrary } from "../../images/stack/testing";
import { git, uml, trello, scrum } from "../../images/stack/management";

function Stack() {
  useEffect(() => {
    document.querySelectorAll('.stack-item').forEach((item) => {
      observer.observe(item);
    });
  });

  return (
    <section className="stack" id="stack">
      <div className="stack-container">
        <StackItem group="Frontend" items={[html5, css3, sass, figma, react]} entersFrom="right"/>
        <StackItem group="Backend" items={[node, express]} entersFrom="left"/>
        <StackItem group="Databases" items={[mysql, mongodb, postgresql]}  entersFrom="right"/>
        <StackItem group="Testing" items={[jestt, testinglibrary]} entersFrom="left"/>
        <StackItem group="Management" items={[git, uml, trello, scrum]} entersFrom="right"/>
      </div>
      <Button to="home" />
    </section>
  );
}

export default Stack;

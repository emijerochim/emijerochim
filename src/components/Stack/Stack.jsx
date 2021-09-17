import "./stack.scss";
import StackItem from "./StackItem";
import Button from "../Button/Button";

import { html5, css3, sass, figma, react } from "../../images/stack/frontend";
import { node, express } from "../../images/stack/backend";
import { mysql, mongodb, postgresql } from "../../images/stack/databases";
import { jestt, testinglibrary } from "../../images/stack/testing";
import { git, uml, trello, scrum } from "../../images/stack/management";

function Stack() {
  return (
    <section className="stack" id="stack">
      <div className="container">
        <StackItem group="Frontend" items={[html5, css3, sass, figma, react]} />
        <StackItem group="Backend" items={[node, express]} />
        <StackItem group="Databases" items={[mysql, mongodb, postgresql]} />
        <StackItem group="Testing" items={[jestt, testinglibrary]} />
        <StackItem group="Management" items={[git, uml, trello, scrum]} />
        <Button to="home" />
      </div>
    </section>
  );
}

export default Stack;

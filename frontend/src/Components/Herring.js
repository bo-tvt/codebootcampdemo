import React, { useState, useEffect } from "react";
//import PropTypes from "prop-types";

import "./Herring.css";

import fakeVerb from "../Components/fakedata/Verb.json";
import fakeNoun from "../Components/fakedata/Noun.json";
import fakeTag from "../Components/fakedata/Tag.json";
import fakeTagYes from "../Components/fakedata/TagYes.json";
import fakeTagNo from "../Components/fakedata/TagNo.json";
import fakeItem from "../Components/fakedata/Item.json";
import fakePositive from "../Components/fakedata/Positive.json";
import fakeNegative from "../Components/fakedata/Negative.json";
//This is the database until something better replaces it.

//The three generators follow:
const herringGenerator1 = (verbs, nouns) => {
  const verb = verbs[Math.floor(Math.random() * verbs.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  let isChoice = 0;
  return `Have you ever ${verb.name} ${noun.name}?`;
};

const herringGenerator2 = (items, positive) => {
  const item1 = items[Math.floor(Math.random() * items.length)];
  const positive1 = positive[Math.floor(Math.random() * positive.length)];
  const item2 = items[Math.floor(Math.random() * items.length)];
  const positive2 = positive[Math.floor(Math.random() * positive.length)];
  return `If you could choose between ${item1.name} that ${positive1.name} or
    ${item2.name} that ${positive2.name}, 
    which would you choose, if you can only have one?`;
};

const herringGenerator3 = (items, negative) => {
  const item1 = items[Math.floor(Math.random() * items.length)];
  const negative1 = negative[Math.floor(Math.random() * negative.length)];
  const item2 = items[Math.floor(Math.random() * items.length)];
  const negative2 = negative[Math.floor(Math.random() * negative.length)];
  return `If you had to choose between ${item1.name} that ${negative1.name} or
    ${item2.name} that ${negative2.name}, 
    which would you choose, if you HAD to?`;
};

//This implements the choice of question randomizer.
const getQuestion = (generatorType) => {
  switch (generatorType) {
    case 1:
      return herringGenerator1(fakeVerb, fakeNoun);
    case 2:
      return herringGenerator2(fakeItem, fakePositive);
    case 3:
      return herringGenerator3(fakeItem, fakeNegative);
  }
};

//The following bits pick the answer tags. There's also an alternative in development.
const getAnswer = (yes) => {
  const tagYes = fakeTagYes[Math.floor(Math.random() * fakeTagYes.length)];
  const tagNo = fakeTagNo[Math.floor(Math.random() * fakeTagNo.length)];
  return yes ? tagYes.name : tagNo.name;
};

const getChoice = (former) => {
  const tagNeutral = fakeTag[Math.floor(Math.random() * fakeTag.length)];
  return former ? tagNeutral.name : tagNeutral.name;
};

/*
const getQuestion = (generatorType, yes) => {
    const tagYes = fakeTagYes[Math.floor(Math.random() * fakeTagYes.length)];
  const tagNo = fakeTagNo[Math.floor(Math.random() * fakeTagNo.length)];
    const tagNeutral = fakeTag[Math.floor(Math.random() * fakeTag.length)];
  switch (generatorType) {
    case 1:
  return yes ? tagYes.name : tagNo.name;
    case 2:
    case 3:
  return former ? tagNeutral.name : tagNeutral.name;
  }
};
*/

export default function Herring(props) {
  const generatorType = Math.floor(Math.random() * 3) + 1; // This is THE randomizer
  const [question, setquestion] = useState(undefined);
  const [answer, setanswer] = useState(undefined);
  const [choice, setchoice] = useState(undefined);
  /*const [problem, setproblem] = useState(undefined); This is a possible solution for 
  implementing the answer/choice selection.*/

  return (
    <div>
      <button
        onClick={() => {
          setquestion(getQuestion(generatorType));
          setanswer(undefined);
          setchoice(undefined);
        }}
      >
        Ask me a question!
      </button>

      <h1>{question}</h1>

      <button onClick={() => setanswer("yes")}>Yes</button>
      <button onClick={() => setanswer("no")}>No</button>
      <h2> {answer && getAnswer(generatorType, answer === "yes")}</h2>

      <button onClick={() => setchoice("former")}>The former</button>
      <button onClick={() => setchoice("latter")}>The latter</button>
      <h2> {choice && getChoice(generatorType, choice === "former")}</h2>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import fakeVerb from "../Components/fakedata/Verb.json";
import fakeNoun from "../Components/fakedata/Noun.json";
import fakeTag from "../Components/fakedata/Tag.json";
import fakeTagYes from "../Components/fakedata/TagYes.json";
import fakeTagNo from "../Components/fakedata/TagNo.json";
import fakeItem from "../Components/fakedata/Item.json";
import fakePositive from "../Components/fakedata/Positive.json";
import fakeNegative from "../Components/fakedata/Negative.json";


/*
const question = [
    herringGenerator1(fakeVerb, fakeNoun),
    herringGenerator2(fakeItem, fakePositive), 
    herringGenerator3(fakeItem, fakeNegative)
];
const rnd = Math.floor(Math.random() * question.length)
const pick = question[rnd];

Rakenna logiikka: if 0 -> kysymyksen 1 logiikka, muuten q2 tai q3 helpommin.

*/

const herringGenerator1 = (verbs, nouns) => {
    const verb = verbs[Math.floor(Math.random() * verbs.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];

    return `Have you ever ${verb.name} ${noun.name}?`
}

/*
const herringGenerator2 = (items, positive) => {
    const item1= items[Math.floor(Math.random() * items.length)];
    const positive1 = positive[Math.floor(Math.random() * positive.length)];
    const item2= items[Math.floor(Math.random() * items.length)];
    const positive2 = positive[Math.floor(Math.random() * positive.length)];
    return
    `If you could choose between ${item1.name} that ${positive1.name} or
    ${item2.name} that ${positive2.name}, 
    which would you choose, if you can only have one?`
}
*/

/*
const herringGenerator3 = (items, negative) => {
    const item1= items[Math.floor(Math.random() * items.length)];
    const negative1 = negative[Math.floor(Math.random() * negative.length)];
    const item2= items[Math.floor(Math.random() * items.length)];
    const negative2 = negative[Math.floor(Math.random() * negative.length)];
    return
    `If you had to choose between ${item1.name} that ${negative1.name} or
    ${item2.name} that ${negative2.name}, 
    which would you choose, if you HAD to?`
}
*/
const getQuestion = () => herringGenerator1(
    fakeVerb, fakeNoun, fakeTagYes, fakeTagNo)


export default function Herring(props) {

    const [answer, setanswer] = useState(undefined);
    const [question, setquestion] = useState(undefined);
    const tagYes = fakeTagYes[Math.floor(Math.random() * fakeTagYes.length)];
    const tagNo = fakeTagNo[Math.floor(Math.random() * fakeTagNo.length)];

    return (
        <div>
            <button onClick={() => { setquestion(getQuestion()); setanswer(undefined) }}>Ask me a question!</button>
            {question}
            <button onClick={() => setanswer("yes")}>Yes</button>
            <button onClick={() => setanswer("no")}>No</button>
            {answer && (answer === "yes" ? tagYes.name : tagNo.name)}
        </div>

    )
}

/*
switch (question) {
    case 1:
      const herringQuestion1 = herringGenerator1(
          fakeVerb, fakeNoun, fakeTagYes, fakeTagNo);
      break;
    case 2:
     const herringQuestion2 = herringGenerator2(
          item1, positive1, item2, positive2);
      break;
    case 3:
     const herringQuestion3 = herringGenerator3(
          item1, negative1, item2, negative2);
      break;
  }
  */
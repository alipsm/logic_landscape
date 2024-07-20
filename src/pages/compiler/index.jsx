import React, { useState } from "react";

export default function Compiler() {
  const SAMPLE_GRAMMER = "(S+S)|S*S|x|y|Sx";

  const [compiled, setCompiled] = useState(false);
  const [inputValue, setInputValue] = useState(SAMPLE_GRAMMER);
  const [ambiguity, setAmbiguity] = useState([]);

  const [first, setFirst] = useState("");
  const [ambiguityFirst, setAmbiguityFirst] = useState("");

  const [follow, setFollow] = useState("");
  const [ambiguityFollow, setAmbiguityFollow] = useState("");

  // helpers
  const isTerminal = (character) => character === character.toLowerCase();

  async function findFirst(grammer, callback) {
    const firstWords = [];
    let textSplited = grammer.split("|");

    textSplited.forEach((item) => {
      item = item.trim();
      if (isTerminal(item[0])) {
        firstWords.push(item[0]);
      }
    });
    callback(firstWords.join(" , "));
    return firstWords.join(" , ");
  }

  function findFollow(
    grammer,
    innerFirst,
    callback,
    followRule2Callback,
    followRule3Callback
  ) {
    const followWords = [];
    let textSplited = grammer.split("|");
    let finishWithNonTerminal = false;

    textSplited.forEach((item) => {
      item = item.trim();

      for (let index = 0; index < item.length; index++) {
        if (
          !isTerminal(item[index]) &&
          item[index + 1] &&
          item[index + 1] !== "'" &&
          isTerminal(item[index + 1])
        ) {
          followWords.push(item[index + 1]);
        }

        // Rules 2
        if (
          !isTerminal(item[index]) &&
          item[index + 1] &&
          !isTerminal(item[index + 1])
        ) {
          followRule2Callback(innerFirst);
        }

        // Rules 3
        if (
          (index === item.length && !isTerminal(item[index])) ||
          !isTerminal(item[index])
        ) {
          finishWithNonTerminal = true;
        }
      }
    });
    debugger;
    if (finishWithNonTerminal && !!followRule3Callback) {
      followRule3Callback(followWords.join(" , "));
    }
    callback(followWords.join(" , "));
  }

  function leftRecertion() {
    let ambiguityList = [];

    let textSplited = inputValue.split("|");

    // check mbiguity
    let withoutAmbiguityList = textSplited.filter((item) => {
      item = item.trim();
      if (item.startsWith("S")) {
        ambiguityList.push(item);
        return false;
      }
      return true;
    });

    // append S`
    if (ambiguityList.length) {
      withoutAmbiguityList = withoutAmbiguityList
        .map((item) => item + "S'")
        .join("|");
      ambiguityList = ambiguityList.map((item = "") => {
        return String(item).substring(1) + `S'`;
      });
    } else {
      withoutAmbiguityList = withoutAmbiguityList.map((item) => item).join("|");
    }
    if (ambiguityList.length) {
      ambiguityList = [ambiguityList.join("|")];
    }
    setAmbiguity(ambiguityList);
    setInputValue(withoutAmbiguityList);
    setCompiled(true);

    Promise.allSettled([
      findFirst(withoutAmbiguityList, setFirst),
      findFirst(ambiguityList[0], setAmbiguityFirst),
    ]).then(async (data) => {
      console.log("first: ", data);
      let innerFolows = "";
      let innerAmbiguityFollow = "";

      findFollow(
        ambiguityList[0],
        data[1].value,
        (follows) => (innerAmbiguityFollow = follows + innerAmbiguityFollow),
        () => (innerFolows = [innerFolows, data[1].value].join(" , ")),
        (follows) => (innerAmbiguityFollow = follows + innerAmbiguityFollow)
      );

      findFollow(
        withoutAmbiguityList,
        data[1]?.value,
        (follows) => (innerFolows = innerFolows + " , " + follows),
        () => {},
        (follows) => (innerAmbiguityFollow = "$ , " + follows + innerFolows)
      );

      setFollow(innerFolows);
      setAmbiguityFollow(innerAmbiguityFollow);
    });
  }

  function getPrime(count) {
    return Array.from({ length: count })
      .map(() => "`")
      .join("");
  }

  function start(params) {
    leftRecertion();
  }

  function reset() {
    setInputValue(SAMPLE_GRAMMER);
    setAmbiguity([]);
    setCompiled(false);
  }

  return (
    <div className=" w-full h-full flex justify-center items-center flex-col gap-4">
      <div className=" bg-[#380e241a] absolute left-4 top-4 px-2 py-1 rounded text-maroon cursor-default">
        درحال توسعه
      </div>
      <div className="flex gap-2 justify-center items-center">
        <strong>S</strong>
        <span>{"-->"}</span>
        <input
          className=" py-1 px-2"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {compiled && (
          <div>
            <b>First: {first}</b> |<b>Follow: $ , {follow}</b>
          </div>
        )}
      </div>

      {ambiguity.length > 0 &&
        ambiguity.map((item, index) => (
          <div className="flex gap-2 justify-center items-center">
            <strong>S{getPrime(index + 1)}</strong>
            <span>{"-->"}</span>
            <input
              className=" py-1 px-2"
              type="text"
              value={item + "|3"}
              readOnly
            />
            {compiled && (
              <div>
                <b>First: {ambiguityFirst}</b>|<b>Follow: {ambiguityFollow}</b>
              </div>
            )}
          </div>
        ))}
      <br />
      <button
        onClick={compiled ? reset : start}
        className={`py-1 px-2 rounded-md  ${
          compiled ? " bg-yellowCustome text-maroon" : "bg-maroon text-white"
        }`}
      >
        {compiled ? "reset" : "compile"}
      </button>
    </div>
  );
}

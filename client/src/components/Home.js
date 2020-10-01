import React, { useState, useEffect } from "react";
import useRandom from "../customHooks/useRandom";

const Home = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(10);

  useEffect(() => {
    console.log("only run once on mount");
  }, []);

  // this will act as component did update
  // but only if num1 changes
  useEffect(() => {
    console.log("number 1 use Effect Called");
    // what if this is time consuming thing here
    // axios call
    if (num1 > 10) {
      setNum1(0);
    }
    // componentDidUmount and after everytime it is called
    // eventListner, timer, interval,
    return () => {
      console.log("run clean up");
    };
  }, [num1]);

  // can be componentDidMount compentDidUpdate and CompenentWillUmount
  useEffect(() => {
    console.log("number 2 use Effect Called");
    // what if this is time consuming thing here
    // axios call
    if (num2 > 15) {
      setNum2(10);
    }
  }, [num2]);

  // Can't do this, use Hooks in functions in your component
  // const someFunction = () => {
  //   const [num1, setNum1] = useState(0);
  //   const val = useRandom(1000);
  // };

  const val = useRandom(1000);
  const val1 = useRandom([10, 15]);
  const val2 = useRandom([100, 200]);
  return (
    <>
      <div>Home</div>

      <p onClick={() => setNum1(num1 + 1)}>NUmber 1: {num1}</p>
      <p onClick={() => setNum2(num2 + 1)}>NUmber 2: {num2}</p>
      {/* <p onClick={val.reset}> {val.number}</p>
      <p onClick={val1.reset}> {val1.number}</p>
      <p onClick={val2.reset}> {val2.number}</p> */}
    </>
  );
};

export default Home;

import React from "react";

export const index = () => {
  let isBegineer: boolean = true;
  let total: number = 0;
  let nameData: string = "vridhi";

  //nameData = true; //Type 'boolean' is not assignable to type 'string'

  let sentence: string = `My name is ${nameData}`;
  let n: null = null;
  let u: undefined = undefined;
  console.log(nameData, n, u, sentence, total, isBegineer);

  // for array
  let list1: number[] = [1, 2, 3, 4, 5];
  let list2: Array<number> = [1, 2, 3, 4, 5];

  //tupple type

  let person1: [string, number] = ["vridhi", 22];

  enum colors {
    Red = 5,
    Green,
    Blue,
  } //0,1,2 ///// 5,6,7

  let c: colors = colors.Green;

  console.log(list1, list2, c);

  return <div>index</div>;
};

export const parseArgs = () => {
  // Write your code here
  const args = process.argv.slice(2);
  const pops = args
    .map((el, index) => {
      if (el.startsWith("--")) {
        return { [el.slice(2)]: args[index + 1] };
      } else {
        return;
      }
    })
    .filter((el) => el !== undefined);
  console.log(
    pops.map((el) => `${Object.keys(el)} is ${el[Object.keys(el)]}`).join(", "),
  );
};
// args.js - implement function that parses command line arguments (given in format --propName value --prop2Name value2, you don't need to validate it) and prints them to the console in the format propName is value, prop2Name is value2

export let name = "esm";
const log = () => {
  console.log("i am esm");
};
export function changeName(str) {
  name = str;
}
export default log;

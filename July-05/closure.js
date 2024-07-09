let codeword = "hulk";
function spacecheck() {
  let question = "please provide the code word";
  let b = 5;
  function codewordcheck() {
    console.log(question);
    let password = "hulk";
    if (password == codeword) {
      console.log("success");
    } else {
      console.log("fail");
    }
  }
  codewordcheck();
}
spacecheck();

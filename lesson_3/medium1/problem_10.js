// Consider these two simple functions:

function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

// What will the following function invocation return?
bar(foo());

// foo(); should return "yes", which then gets passed into bar as bar("yes").
// In turn, that makes the condition of param === "no" false because param is "yes". The ternary then evaluates to "no", which is what gets returned.
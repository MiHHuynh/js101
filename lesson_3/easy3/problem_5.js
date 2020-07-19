// The following function unnecessarily uses two return statements to return boolean values. How can you eliminate the unnecessary duplication?

function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

// Try to come up with at least two different solutions.

function isColorValid(color) {
  // return (color === "blue" || color === "green") ? true : false;
  return (color === "blue" || color === "green");
}

// const isColorValid = color => ["blue", "green"].includes(color);
// const isColorValid = color => color === "blue" || color === "green";
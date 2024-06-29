function printPattern(n, t) {
  let space = n - 2;

  if (t === "1") {
    let i, j;
    for (i = 1; i <= n; i++) process.stdout.write(i.toString());
    for (i = 2, j = n - 1; i < n; i++, j--) {
      console.log();
      process.stdout.write(i.toString());
      while (space--) process.stdout.write(" ");
      space = n - 2;
      process.stdout.write(j.toString());
    }
    console.log();
    for (i = n; i > 0; i--) process.stdout.write(i.toString());
    console.log();
  } else if (t === "a") {
    let i, j;
    for (i = "a".charCodeAt(0); i <= "a".charCodeAt(0) + n - 1; i++)
      process.stdout.write(String.fromCharCode(i));
    for (
      i = "b".charCodeAt(0), j = "a".charCodeAt(0) + n - 2;
      i < "a".charCodeAt(0) + n - 1;
      i++, j--
    ) {
      console.log();
      process.stdout.write(String.fromCharCode(i));
      while (space--) process.stdout.write(" ");
      space = n - 2;
      process.stdout.write(String.fromCharCode(j));
    }
    console.log();
    for (i = "a".charCodeAt(0) + n - 1; i >= "a".charCodeAt(0); i--)
      process.stdout.write(String.fromCharCode(i));
    console.log();
  } else if (t === "A") {
    let i, j;
    for (i = "A".charCodeAt(0); i <= "A".charCodeAt(0) + n - 1; i++)
      process.stdout.write(String.fromCharCode(i));
    for (
      i = "B".charCodeAt(0), j = "A".charCodeAt(0) + n - 2;
      i < "A".charCodeAt(0) + n - 1;
      i++, j--
    ) {
      console.log();
      process.stdout.write(String.fromCharCode(i));
      while (space--) process.stdout.write(" ");
      space = n - 2;
      process.stdout.write(String.fromCharCode(j));
    }
    console.log();
    for (i = "A".charCodeAt(0) + n - 1; i >= "A".charCodeAt(0); i--)
      process.stdout.write(String.fromCharCode(i));
    console.log();
  }
}

// Test the function
let n = 5;
let t = "A";
printPattern(n, t);

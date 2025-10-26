function convertHTML(string) {
  let result = ""; // nouvelle chaîne où on va accumuler les caractères

  for (let char of string) {
    if (char === "&") {
      result += "&amp;";
    } else if (char === "<") {
      result += "&lt;";
    } else if (char === ">") {
      result += "&gt;";
    } else if (char === '"') {
      result += "&quot;";
    } else if (char === "'") {
      result += "&apos;";
    } else {
      result += char;
    }
  }

  return result;
}

console.log(convertHTML("Dolce & Gabbana")); // "Dolce &amp; Gabbana"

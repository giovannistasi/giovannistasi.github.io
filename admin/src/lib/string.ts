// https://stackoverflow.com/a/35413452/5835100
export function formatEndline(stringifiedString: string) {
  return stringifiedString.replace(/\\n/g, '  \n');
  // .replace(/\\'/g, "\\'")
  // .replace(/\\"/g, '\\"')
  // .replace(/\\&/g, '\\&')
  // .replace(/\\r/g, '\\\r')
  // .replace(/\\t/g, '\\\t')
  // .replace(/\\b/g, '\\\b')
  // .replace(/\\f/g, '\\\f');
}

// THE FUNCTION BELOW IS GENERATED BY CHATGPT
// I DON'T KNOW WHAT IT DOES
// THE FOLLOWING COMMENT IS ALSO GENERATED BY CHATGPT
// This function uses the pattern /<(?![^<]*>)[^>]*[^\/]/g to match all instances of incomplete HTML tags. The negative lookahead (?![^<]*>) ensures that complete HTML tags are not matched by checking for the presence of a > after an opening angle bracket <. The replace method with a callback function is used to replace each match with its HTML entity equivalent. The replace method is called again within the callback function to replace all instances of < with &lt;.
export function formatStringToFilterIncompleteHtmlTag(str: string) {
  // eslint-disable-next-line no-useless-escape
  return str.replace(/<(?![^<]*>)[^>]*[^\/]/g, function (match) {
    return match.replace(/</g, '&lt;');
  });
}

export function removeLeadingAndTrailingQuotes(str: string) {
  if (str.length < 2) return str;

  if (str[0] === '"' && str[str.length - 1] === '"') {
    return str.slice(1, -1);
  }

  return str;
}

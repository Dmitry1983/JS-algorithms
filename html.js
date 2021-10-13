const str = "<div><div><b></b></div></p>";

function HTMLElements(str) {
  let oTag = str.match(/<\w+>/g);
  let cTag = str.match(/(<\/\w+>)/g).reverse();
  let tagsObj = {
    "<b>": "</b>",
    "<i>": "</i>",
    "<em>": "</em>",
    "<div>": "</div>",
    "<p>": "</p>",
  };

  const max = Math.max(oTag.length, cTag.length);

  for (let i = 0; i < max; i++) {
    if (tagsObj[oTag[i]] !== cTag[i]) {
      return (oTag[i] || cTag[i]).replace(/<|>/g, "");
    }
  }

  return true;
}

function demo(str) {
  const res = HTMLElements(str);
  console.log(str, "\t--> ", res);
}

demo("<div><div><b><b/></div></p>"); // "div" (closing a `div` with a `p`)
demo("<p><div><b><b/></div></p>"); // "b" (because `<b/>` is invalid)
demo("<p><div></p></div>"); // "p" (wrong order)
demo("<p><div><b></b>"); // "p" (not closed at all)
demo("<p><div></b></div></p>"); // "/b" (not opened)
demo("<p><div><b></b></div></p>"); // true

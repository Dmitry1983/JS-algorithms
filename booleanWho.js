function booWho(bool) {
  if (typeof bool == "boolean") {
    return true;
  }
  return false;
}

console.log(booWho(null));

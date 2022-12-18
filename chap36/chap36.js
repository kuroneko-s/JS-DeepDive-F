function parseURL(url = "") {
  const parsedURL = url.match(/^(\w+):\/\/([^/]+)\/(.*)$/);
  console.log(parsedURL);

  if (!parseURL) return {};
  const [, protocol, host, path] = parsedURL;
  return { protocol, host, path };
}

console.log(parseURL("https://developer.mozilla.org/ko/docs/Web/JavaScript"));

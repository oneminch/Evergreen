function calloutSyntaxReplacer(
  match: string,
  p1: string,
  p2: string,
  p3: string
) {
  const quoteContent = p3.replaceAll(/(^|\n)>\s/g, "$1");

  return `${p1}\n::app-callout\n${quoteContent}\n::`;
}

const CALLOUT_REGEX = /(^|\n)>{1}\s(?:\[!(\w+)\])\n((>{1}\s.*(\n|$))*)/gi;

const parseCallouts = (fileBody: string) => {
  return fileBody.replaceAll(CALLOUT_REGEX, calloutSyntaxReplacer);
};

export default parseCallouts;

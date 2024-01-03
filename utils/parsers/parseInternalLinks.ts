const deconstructInternalLink = (internalLink) => {
  // const isLabelled = p1.split("|").length > 1;
  // if (isLabelled) {
  //   const [linkInfo, label] = p1.split("|");
  // }
};

const INTERNAL_LINK_REGEX = /\[\[(.+?)\]\]/gi;

const parseInternalLinks = (
  fileBody: string,
  tree: { [key: string]: string[] }
) => {
  return fileBody.replaceAll(
    INTERNAL_LINK_REGEX,
    (match: string, p1: string) => {
      return `:app-internal-link[${p1}]`;
    }
  );
};

export default parseInternalLinks;

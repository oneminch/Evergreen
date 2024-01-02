import parseCallouts from "./parseCallouts";
import parseInternalLinks from "./parseInternalLinks";
import parseAnnotations from "./parseAnnotations";

export default class Parser {
  stringBody: string;

  constructor(stringBody: string) {
    this.stringBody = stringBody;
  }

  parseCallouts() {
    this.stringBody = parseCallouts(this.stringBody);
    return this;
  }

  parseInternalLinks(tree: { [key: string]: string[] }) {
    this.stringBody = parseInternalLinks(this.stringBody, tree);
    return this;
  }

  parseAnnotations() {
    this.stringBody = parseAnnotations(this.stringBody);
    return this;
  }

  getStringBody() {
    return this.stringBody;
  }
}

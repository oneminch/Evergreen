function annotationSyntaxReplacer(match: string, p1: string) {
  return `:app-annotation[${p1}]`;
}

const ANNOTATION_REGEX = /==(.+?)==/gi;

const parseAnnotations = (fileBody: string) => {
  return fileBody.replaceAll(ANNOTATION_REGEX, annotationSyntaxReplacer);
};

export default parseAnnotations;

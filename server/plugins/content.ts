import getFilePaths from "~/utils/getFilePaths";
import Parser from "~/utils/parsers/parser";

type FileType = {
  _id: string;
  body: string;
};

export default defineNitroPlugin(async (nitroApp) => {
  const tree = await getFilePaths();

  //@ts-ignore
  nitroApp.hooks.hook("content:file:beforeParse", async (file: FileType) => {
    if (file._id.endsWith(".md")) {
      const parser = new Parser(file.body);
      file.body = parser
        .parseAnnotations()
        .parseInternalLinks(tree)
        .parseCallouts()
        .getStringBody();
    }
  });
});

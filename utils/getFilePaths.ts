import slugify from "slugify";

const generatePath = (path: string): string => {
  path = path
    .split("/")
    .map((part) =>
      slugify(
        part
          .replace(/(\d+\.)?(.*)/, "$2")
          .replace(/^index(\.draft)?$/, "")
          .replace(/\.draft$/, ""),
        { lower: true }
      )
    )
    .join("/");
  return path;
};

export default async function getFilePaths() {
  const storage = useStorage();
  const allFiles: string[] = await storage.getKeys(
    "content:source:github:remote:"
  );
  const filePaths: { [key: string]: string[] } = {};

  allFiles.forEach((fileId) => {
    const file = fileId.split("content:source:github:remote:")[1];
    const navParts = file.split(":");

    const [, filename, _extension] =
      navParts[navParts.length - 1]?.match(/(.*)\.([^.]+)$/) || [];

    if (filename && _extension.endsWith("md")) {
      navParts[navParts.length - 1] = filename;
    }

    const filePath = (navParts || []).join("/");

    if (!filePaths[filename]) {
      filePaths[filename] = [generatePath(filePath)];
    } else {
      filePaths[filename].push(generatePath(filePath));
    }
  });

  return filePaths;
}

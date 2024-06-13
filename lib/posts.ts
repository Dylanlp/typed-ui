import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "app/articles/posts");

export interface PostData {
  id: string;
  date: string;
  title: string;
  contentHtml: string;
}

export function getSortedPostsData(): PostData[] {
  const fileNames = fs.readdirSync(postsDirectory).filter((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    return fs.statSync(fullPath).isFile();
  });

  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    const processedContent = remark()
      .use(html)
      .processSync(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
      id,
      ...(matterResult.data as { date: string; title: string }),
      contentHtml,
    };
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

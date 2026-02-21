export interface IPublication {
  type: "article" | "expert commentary" | "video";
  date: string;
  name: string;
  link: string;
  publisher: string;
  description?: string;
  language: "English" | "Russian";
  archive?: string;
}

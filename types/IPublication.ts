export interface IPublication {
  type: string;
  date: string;
  name: string;
  link: string;
  publisher: string;
  description?: string;
  language: string;
  archive?: string;
}

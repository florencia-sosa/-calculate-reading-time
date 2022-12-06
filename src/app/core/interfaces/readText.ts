export interface ReadText {
  id: number;
  autor: string;
  title: string;
  text: string;
  url: string;
}

export interface SpectsText extends ReadText {
  minText: string;
  time: number;
  chText: number;
}

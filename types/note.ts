export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string; // або Date, якщо парсиш
  updatedAt: string; // або Date
  tag: "Work" | "Personal" | "Meeting" | "Shopping" | "Todo";
}

export type NoteId = Note["id"];
export type Tag = Note["tag"];
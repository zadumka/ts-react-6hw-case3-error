import axios from 'axios';
import { Note } from '@/types/note';

axios.defaults.baseURL = 'https://noteHub.goit.study/api';
axios.defaults.headers.common.Authorization = `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`;

interface NewNoteContent {
  title: string;
  content?: string;
}

export const createNote = async (newNote: NewNoteContent) => {
  const response = await axios.post<Note>('/notes', newNote);
  return response.data;
};

export const deleteNote = async (noteId: number) => {
  const response = await axios.delete<Note>(`/notes/${noteId}`);
  return response.data;
};

export const fetchNoteById = async (noteId: number) => {
  const response = await axios.get<Note>(`/notes/${noteId}`);
  return response.data;
};

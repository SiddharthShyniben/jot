import {Injectable} from '@angular/core';
import {Note} from '../models/note';

@Injectable({
	providedIn: 'root'
})
export class NoteStorageService {

	notes: Note[] = []

	stringifyData(data: Note[]): string {
		return JSON.stringify(data);
	}

	load() {
		this.notes = this.getData();
	}

	parseData(str: string): Note[] {
		return JSON.parse(str) || [];
	}

	getData() {
		return this.parseData(this._get() || "[]") || this._set([]);
	}

	setData(data: Note[]) {
		return this._set(data);
	}

	createNote(note: Note) {
		localStorage.setItem('c', localStorage.getItem('c') ? (+(localStorage.getItem('c') as string) + 1).toString() : '0')

		note.id = +(localStorage.getItem('c') || 0);

		let prev = this.getData();
		prev.push(note);
		this._set(prev);
		this.notes = this.getData()
	}

	deleteNote(id: number) {
		this.setData(this.getData().filter(note => note.id !== id))
		this.notes = this.getData()
	}

	updateNote(updatedNote: Partial<Note>, id: number) {
		this.setData(this.getData().map(note =>
			updatedNote.id !== id ? note : Object.assign(note, updatedNote)))
			this.notes = this.getData()
	}

	_get() {
		return localStorage.getItem("n");
	}

	_set(data: Note[]) {
		localStorage.setItem("n", this.stringifyData(data))
		return data
	}

}

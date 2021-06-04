import {Component} from '@angular/core';
import {Note} from 'src/app/models/note';
import {NoteStorageService} from 'src/app/services/note-storage.service';

@Component({
	selector: 'app-new-note',
	templateUrl: './new-note.component.html',
	styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent {

	note: Note = {
		createdAt: new Date().getTime(),
		title: '',
		body: ''
	}

	constructor(private noteService: NoteStorageService) {}

	save() {
		this.noteService.createNote(this.note)
		this.clear();
	}

	clear() {
		this.note = Object.assign(this.note, {
			createdAt: new Date().getTime(),
			title: '',
			body: ''
		})
	}

}

import {Component, Input} from '@angular/core';
import {Note} from 'src/app/models/note';
import {NoteStorageService} from 'src/app/services/note-storage.service';

@Component({
	selector: 'app-note',
	templateUrl: './note.component.html',
	styleUrls: ['./note.component.css']
})
export class NoteComponent {
	@Input() note: Note = {title: 'No title', body: 'No body', createdAt: new Date().getTime()};

	constructor(private noteService: NoteStorageService) {}
	
	deleteNote() {
		this.noteService.deleteNote(this.note.id || 0)
	}
}

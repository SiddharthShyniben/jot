import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Note} from 'src/app/models/note';
import {NoteStorageService} from 'src/app/services/note-storage.service';
@Component({
	selector: 'app-note-edit',
	templateUrl: './note-edit.component.html',
	styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {

	id: number = 0;

	note: Partial<Note> = {title: 'Note not found', body: 'Why don\'t you make a new note?', createdAt: new Date().getTime()}

	constructor(private noteService: NoteStorageService, private route: ActivatedRoute) {}

	ngOnInit() {
		let params = this.route.snapshot.paramMap;

		let id = +(params.get('id') || 0);
		this.id = id;

		this.note = this.noteService
			.getData()
			.find(note => note.id === this.id) || this.note
	}

	save() {
		this.noteService.updateNote(this.note, this.id)
	}
}

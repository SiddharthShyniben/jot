import {Component, OnInit} from '@angular/core';
import {NoteStorageService} from 'src/app/services/note-storage.service';

@Component({
	selector: 'app-note-base',
	templateUrl: './note-base.component.html',
	styleUrls: ['./note-base.component.css']
})
export class NoteBaseComponent implements OnInit {

	constructor(public noteService: NoteStorageService) {}

	ngOnInit() {
		this.noteService.load();
	}
}

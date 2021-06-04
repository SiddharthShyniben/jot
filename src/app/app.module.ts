import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutComponent} from './components/layout/layout.component';
import {NavbarComponent} from './components/layout/navbar/navbar.component';
import {NewNoteComponent} from './components/note-base/new-note/new-note.component';
import {NoteBaseComponent} from './components/note-base/note-base.component';
import {NoteViewComponent} from './components/note-base/note-view/note-view.component';
import {NoteComponent} from './components/note-base/note/note.component';
import {SearchBarComponent} from './components/search/search-bar/search-bar.component';
import {SearchResultsComponent} from './components/search/search-results/search-results.component';
import { NoteEditComponent } from './components/note-edit/note-edit.component';
import { WhitespaceFixerPipe } from './whitespace-fixer.pipe';


@NgModule({
	declarations: [
		AppComponent,
		LayoutComponent,
		NavbarComponent,
		NoteBaseComponent,
		NoteComponent,
		NoteViewComponent,
		NewNoteComponent,
		SearchBarComponent,
		SearchResultsComponent,
  NoteEditComponent,
  WhitespaceFixerPipe,
	],
	imports: [
		FormsModule,
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NoteBaseComponent} from './components/note-base/note-base.component';
import {NoteEditComponent} from './components/note-edit/note-edit.component';

const routes: Routes = [
	{
		path: '',
		component: NoteBaseComponent
	},
	{ path: 'edit/:id', component: NoteEditComponent  }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}

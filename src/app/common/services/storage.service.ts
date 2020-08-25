import { Injectable             }   from    '@angular/core';
import { NoteService            }   from    './note.service';
import { Note                   }   from    '../models/note.model';

@Injectable({
    providedIn                  :   'root'
})
export class StorageService {

    constructor(
		private noteService		:	NoteService
    ) { }
    
    public getItem(): Note[] {
		let notes				=	JSON.parse(localStorage.getItem('notes'));
		return notes && notes.length > 0 ? notes : [];
	}

    public setItem(
		payload					: 	any
	): void {
		window.localStorage.setItem('notes', JSON.stringify(payload));
    }

    public deleteItem(): void {

        let notesAfterDeletion  :   Note[]          =   this.noteService.actualNoteData$.getValue().filter((note: Note) => {
            // console.log('note id -> ',note.id, 'selected id -> ', this.noteService.selectedNote.id);
            return note.id != this.noteService.selectedNote.id;
        });

		if(notesAfterDeletion && notesAfterDeletion.length > 0) {
            this.setItem(notesAfterDeletion);
            this.noteService.setNextNote(notesAfterDeletion[0]);
		} else {
			this.clearStorage();
			notesAfterDeletion  =	[];
            notesAfterDeletion.push(new Note());
            this.noteService.setNextNote(notesAfterDeletion[0]);
        }

        this.noteService.notesData$.next(notesAfterDeletion);
		this.noteService.actualNoteData$.next(notesAfterDeletion);
    }

    public clearStorage(): void {
		return localStorage.clear();
	}
    

}

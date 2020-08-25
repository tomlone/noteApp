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
		return window.localStorage.setItem('notes', JSON.stringify(payload));
    }

    public deleteItem(
		payload					:	Note[],
		index					:	number
	): Note[] {
		// debugger;
		payload.splice(index, 1);
		if(payload && payload.length > 0) {
			this.noteService.selectedNote	=	payload[0];
		} else {
			payload			=	[];
			payload.push(new Note());
        }
		this.noteService.notesData$.next(payload);
		return payload;
    }
    
    public clearStorage(): void {
		return localStorage.clear();
	}
    

}

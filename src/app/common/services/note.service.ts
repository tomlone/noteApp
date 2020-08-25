import { Injectable             }   from    '@angular/core';
import { BehaviorSubject        }   from    'rxjs';

import { Note                   }   from    '../models/note.model';

@Injectable({
    providedIn                  :   'root'
})
export class NoteService {

    public isMenuOpened         :   boolean                 =   true;
    
    public actualNoteData$      :   BehaviorSubject<Note[]> =   new BehaviorSubject([]);   
    public notesData$           :   BehaviorSubject<Note[]> =   new BehaviorSubject([]);

    public selectedIndex        :   number                  =   0;
    public selectedId           :   string                  =   '';
    public selectedNote         :   Note                    =   null;

    constructor() {   }

    public setNextNote(
        note                    :   Note
    ): void {
        this.selectedNote	    =	note;
        this.selectedId         =   note.id;
        this.selectedIndex      =   0;
    } 

    // public setDefaultNote(): void {
    //     let note            :   Note[]     =   [];
    //     note.push(new Note({}));
    //     this.actualNoteData$.next(note);
    //     this.notesData$.next(note);
    // }

}

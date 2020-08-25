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
    public selectedNote         :   Note                    =   null;

    constructor() {
        
    }

}

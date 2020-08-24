import { Injectable             }   from    '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn                  :   'root'
})
export class NoteService {

    public isMenuOpened         :   boolean                 =   true;
    public notesData$           :   BehaviorSubject<any>    =   new BehaviorSubject([]);

    public selectedIndex        :   number                  =   0;
    public selectedNote         :   any                     =   null;

    constructor() {
        
    }

}

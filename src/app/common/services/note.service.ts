import { Injectable             }   from    '@angular/core';

@Injectable({
    providedIn                  :   'root'
})
export class NoteService {

    public isMenuOpened         :   boolean             =   true;

    constructor() { }
}

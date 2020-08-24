import { Component, OnInit      }   from    '@angular/core';

import { faBars, 
         faTrashAlt,									
         IconDefinition,			
         faPlusCircle			} 	from 	'@fortawesome/free-solid-svg-icons';

import { NoteService            }   from    'src/app/common/services/note.service';

@Component({
    selector                    :   'toolbar',
    templateUrl                 :   './toolbar.component.html',
    styleUrls                   :   ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

    faBars                      :   IconDefinition      =   faBars;
    faDelete                    :   IconDefinition      =   faTrashAlt;
    faCircle                    :   IconDefinition      =   faPlusCircle;          

    constructor(
        private noteService     :   NoteService
    ) { }

    ngOnInit(): void {
    }

    public toggleMenu(): void {
        this.noteService.isMenuOpened   =   !this.noteService.isMenuOpened;
        console.log('menu toggle value -> ', this.noteService.isMenuOpened);
    }

    public createNotesTapped(): void {

    }

    public deleteNotesTapped(): void {

    }

}

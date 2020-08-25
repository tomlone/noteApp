import { Component, OnInit      }   from    '@angular/core';

import { faBars, 
         faTrashAlt,									
         IconDefinition,			
         faPlus			        } 	from 	'@fortawesome/free-solid-svg-icons';

import { NoteService            }   from    'src/app/common/services/note.service';
import { StorageService         }   from    'src/app/common/services/storage.service';
import { Note                   }   from    '../../models/note.model';

@Component({
    selector                    :   'toolbar',
    templateUrl                 :   './toolbar.component.html',
    styleUrls                   :   ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

    faBars                      :   IconDefinition      =   faBars;
    faDelete                    :   IconDefinition      =   faTrashAlt;
    faCircle                    :   IconDefinition      =   faPlus;          

    constructor(
        private noteService     :   NoteService,
        private storage         :   StorageService
    ) { }

    ngOnInit(): void {
    }

    public toggleMenu(): void {
        this.noteService.isMenuOpened   =   !this.noteService.isMenuOpened;
    }

    public createNotesTapped(): void {
		let notes				=	this.noteService.notesData$.getValue();
        notes.unshift(new Note({}));
        this.storage.setItem(notes);
        this.noteService.setNextNote(notes[0]);
		this.noteService.actualNoteData$.next(notes);
    }

    public deleteNotesTapped(): void {
        this.storage.deleteItem();
    }

}

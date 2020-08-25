import { Component, OnInit      }   from    '@angular/core';

import { faBars, 
         faTrashAlt,									
         IconDefinition,			
         faPlusCircle			} 	from 	'@fortawesome/free-solid-svg-icons';

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
    faCircle                    :   IconDefinition      =   faPlusCircle;          

    constructor(
        private noteService     :   NoteService,
        private storage         :   StorageService
    ) { }

    ngOnInit(): void {
    }

    public toggleMenu(): void {
        this.noteService.isMenuOpened   =   !this.noteService.isMenuOpened;
        console.log('menu toggle value -> ', this.noteService.isMenuOpened);
    }

    public createNotesTapped(): void {
		let notes				=	this.noteService.notesData$.getValue();
        notes.unshift(new Note({}));
        this.storage.setItem(notes);
		this.noteService.actualNoteData$.next(notes);
		// this.noteService.actualNoteData$.subscribe(console.log);
    }

    public deleteNotesTapped(): void {
        let afterNoteRemoved	=	this.storage.deleteItem(this.noteService.notesData$.getValue(), this.noteService.selectedIndex);
		// debugger;
		if(afterNoteRemoved && afterNoteRemoved.length > 0) {
            this.storage.setItem(afterNoteRemoved);
            // this.setDefaultNote();
		} else {
            // this.setDefaultNote();
			this.storage.clearStorage();
		}
    }

}

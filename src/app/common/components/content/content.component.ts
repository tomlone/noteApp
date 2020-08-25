import { Component, OnInit      }   from    '@angular/core';

import { NoteService            }   from    '../../services/note.service';
import { StorageService         }   from    '../../services/storage.service';

import { Note                   }   from    '../../models/note.model';

@Component({
    selector                    :   'content-component',
    templateUrl                 :   './content.component.html',
    styleUrls                   :   ['./content.component.scss']
})
export class ContentComponent implements OnInit {
    
    constructor(
        public noteService      :   NoteService,
        private storage         :   StorageService
    ) { }

    ngOnInit(): void {
        this.initialize();
    }

    private initialize(): void {
        this.noteService.notesData$.subscribe(res => {

            // console.log('note service response -> ', res);
            // console.log('selected index -> ', this.noteService.selectedIndex);
            
            if(res.length == 1) {
                if(!res[0].header) {
                    let header      =   document.getElementById('noteHeader');
                    header.innerText=   '';
                }
                if(!res[0].text) {
                    let text      =   document.getElementById('noteText');
                    text.innerText=   '';
                }
            }
        });

    }

    public getDate(): Date {
		if(this.noteService.selectedNote && this.noteService.selectedNote.updatedAt) {
			return new Date(this.noteService.selectedNote.updatedAt);
		} else {
			return new Date();
		}
    }
    
    public readAndSetData(
		ev						: 	any, 
		type					?: 	'header' | 'text'
	): void {

		let notes				:	Note[]			=	this.noteService.notesData$.getValue();
    
        if(type === 'header') {
            notes[this.noteService.selectedIndex].header    =   ev.path[0].innerText;
        }

        if(type === 'text') {
            notes[this.noteService.selectedIndex].text    =   ev.path[0].innerText;
        }

        notes[this.noteService.selectedIndex].updatedAt	=	new Date();

		this.storage.setItem(notes);
		this.noteService.actualNoteData$.next(notes);

	}


}

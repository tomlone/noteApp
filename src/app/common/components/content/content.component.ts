import { Component, OnInit      }   from    '@angular/core';

import { NoteService            }   from    '../../services/note.service';
import { Note } from '../../models/note.model';

@Component({
    selector                    :   'content-component',
    templateUrl                 :   './content.component.html',
    styleUrls                   :   ['./content.component.scss']
})
export class ContentComponent implements OnInit {

    constructor(
        public noteService      :   NoteService
    ) { }

    ngOnInit(): void {
    }

    public getDate(): Date {
		// return new Date();
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

        // let element             =   document.getElementById('noteHeader');
        // let range               =   document.createRange();
        // let position            =   element.innerText.length;
        // let selection           =   window.getSelection();
        // console.log(position);
        // 
        // if(position > 0) {
            // range.setStartAfter(element.firstChild);
            // document.getSelection().collapseToEnd();
            // range.collapse(true);
            // selection.removeAllRanges();
            // selection.addRange(range);    
        // }
        

		let payload				:	Note   			=	new Note({});				
		let notes				:	Note[]			=	this.noteService.notesData$.getValue();
		// this.notes				=	this.noteService.notesData$.getValue();
		console.log(ev.path[0].innerText, type);
        // let selection           =   window.getSelection();

        // notes[this.noteService.selectedIndex].header = '';
        if(type === 'header') {
            notes[this.noteService.selectedIndex].header    =   ev.path[0].innerText;
        }

        if(type === 'text') {
            notes[this.noteService.selectedIndex].text    =   ev.path[0].innerText;
        }


        
		// let x = document.getElementById('noteHeader').innerHTML;
		// console.log('x -> ', x);

		// debugger;
		// if(type === 'header') {
			// payload.header		=	ev.path[0].innerText;
			// this.notes[this.noteService.selectedIndex].header	=	'';
			// notes[this.noteService.selectedIndex].header	=	ev.path[0].innerText;
		// }

		// if(type === 'text') {
			// payload.text		=	ev.path[0].innerText;
			// this.notes[this.noteService.selectedIndex].text	=	'';
			// notes[this.noteService.selectedIndex].text	=	ev.path[0].innerText;
		// }

		// notes[this.noteService.selectedIndex]		=	payload;

		// notes[this.noteService.selectedIndex].updatedAt	=	new Date();

		// this.storageService.setItem(notes);
		// this.noteService.notesData$.next(notes);

	}


}

import { Component, OnInit      }   from    '@angular/core';

import { Observable, fromEvent  }   from    'rxjs';
import { map 					} 	from 	'rxjs/operators';

import { NoteService            }   from    '../common/services/note.service';
import { StorageService         }   from    '../common/services/storage.service';
import { Note                   }   from    '../common/models/note.model';

@Component({
    selector                    :   'app-home',
    templateUrl                 :   './home.component.html',
    styleUrls                   :   ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public deviceSize           :   string;

    constructor(
        public noteService      :   NoteService,
        private storage         :   StorageService
    ) { }

    ngOnInit(): void {

        this.initialize();
    }

    private initialize(): void {

        this.getAndSetNotesData();

        this._getScreenSize();
        const mediaWidth        :   Observable<any>     =   fromEvent(window, 'resize').pipe(
            map(() => this._getScreenSize())
        );
        mediaWidth.subscribe();
    } 

    private getAndSetNotesData(): void {
        let notes				:	Note[]			=	this.storage.getItem();
		// console.log('notes -> ', notes);
		if(notes && notes.length > 0) {
			this.noteService.selectedNote	=	notes[0];
		} else {
			notes			=	[];
			notes.push(new Note());
		}
        this.noteService.actualNoteData$.next(notes);
        this.noteService.notesData$.next(notes);
    }

    private _getScreenSize(): any {
        const viewPorts 		: 	any				=	[{
			type				:	'xs',
			minWidth			:	'(min-width: 0px)'
		}, {
			type				:	'sm',
			minWidth			:	'(min-width: 600px)'
		}, {
			type				:	'md',
			minWidth			:	'(min-width: 768px)'
		}, {
			type				:	'lg',
			minWidth			:	'(min-width: 992px)'
		}, {
			type				:	'xl',
			minWidth			:	'(min-width: 1200px)'
        }];
        
        viewPorts.map((queryMedia: any) => {
			if(window.matchMedia(queryMedia.minWidth).matches === true) {
				this.deviceSize		=	queryMedia.type;
				if(queryMedia.type === 'xs' || queryMedia.type === 'sm') {
					this.noteService.isMenuOpened = false;
				} else {
					this.noteService.isMenuOpened = true;
				}
			}
		});
    }

}

import { Component, OnInit      }   from    '@angular/core';

import { Observable, fromEvent  }   from    'rxjs';
import { map 					} 	from 	'rxjs/operators';

import { NoteService            }   from    '../common/services/note.service';

@Component({
    selector                    :   'app-home',
    templateUrl                 :   './home.component.html',
    styleUrls                   :   ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public deviceSize           :   string;

    constructor(
        public noteService      :   NoteService
    ) { }

    ngOnInit(): void {

        this.initialize();

        this._getScreenSize();
        const mediaWidth        :   Observable<any>     =   fromEvent(window, 'resize').pipe(
            map(() => this._getScreenSize())
        );
        mediaWidth.subscribe();
    }

    private initialize(): void {
        const mockData          :   any                 =   [{
            id                  :   1,
            header              :   'This is mock header 1 for the testing',
            text                :   'This is the mock text of note 1 for the testing purpose',
            updatedAt           :   new Date()
        }, {
            id                  :   2,
            header              :   'This is mock header 2 for the testing',
            text                :   'This is the mock text of note 2 for the testing purpose',
            updatedAt           :   new Date()
        }, {
            id                  :   3,
            header              :   'This is mock header 3 for the testing',
            text                :   'This is the mock text of note 3 for the testing purpose',
            updatedAt           :   new Date()
        }]
        this.noteService.notesData$.next(mockData);
        this.noteService.notesData$.subscribe();
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

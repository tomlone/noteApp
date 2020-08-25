import { Component, OnInit, Input      }   from    '@angular/core';
import { NoteService } from '../../services/note.service';

@Component({
    selector                    :   'note-component',
    templateUrl                 :   './notes.component.html',
    styleUrls                   :   ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

    @Input('note') note			:	any					=	{};
    @Input('index') index       :  number               =   0;

    constructor(
        public noteService      :   NoteService
    ) { }

    ngOnInit(): void {
    }

    ngOnChanges(): void {
        // console.log({note: this.note, index: this.index, selectedIndex: this.noteService.selectedIndex});
    }

}

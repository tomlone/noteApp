import { Component, OnInit, Input      }   from    '@angular/core';
import { NoteService } from '../../services/note.service';

@Component({
    selector                    :   'note-component',
    templateUrl                 :   './notes.component.html',
    styleUrls                   :   ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

    @Input('note') note			:	any					=	{};

    constructor(
        public noteService      :   NoteService
    ) { }

    ngOnInit(): void {
    }

}

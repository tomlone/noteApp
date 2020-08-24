import { Component, OnInit      }   from    '@angular/core';
import { FormGroup, 
         FormBuilder, 
         FormControl            }   from    '@angular/forms';

import { NoteService            }   from    '../../services/note.service';

@Component({
    selector                    :   'sidebar',
    templateUrl                 :   './sidebar.component.html',
    styleUrls                   :   ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    public searchForm           :   FormGroup           =   null;

    constructor(
        private fb              :   FormBuilder,
        public noteService      :   NoteService
    ) { }

    ngOnInit(): void {
        this.searchForm         =   this._buildForm()
    }

    private _buildForm(): FormGroup {
        return this.fb.group({
            search              :   ''
        });
    }

    public selectedIndex(note: any, index: number): void {
        this.noteService.selectedIndex  =   index;
        this.noteService.selectedNote   =   note;
    }

    get search(): FormControl {
        return this.searchForm.get('search') as FormControl;
    }

}

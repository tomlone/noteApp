import { Component, OnInit      }   from    '@angular/core';
import { FormGroup, 
         FormBuilder, 
         FormControl            }   from    '@angular/forms';

import { NoteService            }   from    '../../services/note.service';
import { combineLatest          }   from    'rxjs';
import { startWith, map         }   from    'rxjs/operators';
import { Note                   }   from    '../../models/note.model';

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
        this.searchForm         =   this._buildForm();
        let searchResults$      =   combineLatest(
            this.noteService.actualNoteData$, 
            this.search.valueChanges, 
            (noteData, searchValue) => {
            
                let results         :   Note[]          =   [];
                if(searchValue) {
                    // console.log('note data in search logic -> ', noteData);

                    (noteData as Array<Note>).map((note: Note) => {
                        // console.log('note inside loop -> ',note);
                        if(note.header && note.header.toLowerCase().includes(searchValue.toLowerCase())) {
                            return results.push(note);
                        }

                        if(note.text && note.text.toLowerCase().includes(searchValue.toLowerCase())) {
                            return results.push(note);
                        }
                    });

                } else {

                    results = noteData;

                }

                return results;
        }).pipe(
            map(res => this.noteService.notesData$.next(res))
        );

        searchResults$.subscribe();
    }

    private _buildForm(): FormGroup {
        return this.fb.group({
            search              :   ''
        });
    }

    public selectedIndex(note: any, index: number): void {
        this.noteService.selectedIndex  =   index;
        this.noteService.selectedId     =   note.id;
        this.noteService.selectedNote   =   note;
        // console.log('selected data -> ', {note: this.noteService.selectedNote, index: this.noteService.selectedIndex});
    }

    get search(): FormControl {
        return this.searchForm.get('search') as FormControl;
    }

}

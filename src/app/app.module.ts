import { BrowserModule          }   from    '@angular/platform-browser';
import { NgModule               }   from    '@angular/core';
import { ReactiveFormsModule 	} 	from 	'@angular/forms';

import { AppRoutingModule       }   from    './app-routing.module';
import { AppComponent           }   from    './app.component';
import { HomeComponent          }   from    './home/home.component';
import { ContentComponent       }   from    './common/components/content/content.component';
import { SidebarComponent       }   from    './common/components/sidebar/sidebar.component';
import { ToolbarComponent       }   from    './common/components/toolbar/toolbar.component';
import { NotesComponent         }   from    './common/components/notes/notes.component';
import { TruncateTextPipe       }   from    './common/pipes/truncate-text.pipe';
import { FontAwesomeModule      }   from    '@fortawesome/angular-fontawesome';

@NgModule({
    declarations                :   [
        AppComponent,
        HomeComponent,
        ContentComponent,
        SidebarComponent,
        ToolbarComponent,
        NotesComponent,
        TruncateTextPipe
    ],
    imports                     :   [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FontAwesomeModule
    ],
    providers                   :   [],
    bootstrap                   :   [AppComponent]
})
export class AppModule { }

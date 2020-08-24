export class Note {
    public id                   :   string;
    public header               :   string;
    public text                 :   string;
    public updatedAt            :   Date;

    constructor(obj             :   any             =   {}) {
        this.id                 =   obj.id          ||  '';
        this.header             =   obj.header      ||  '';
        this.text               =   obj.text        ||  '';
        this.updatedAt          =   this.parseDate(obj.updatedAt)
    }

    private parseDate(updatedAt :   Date | string | null): Date {
    
        if(updatedAt) {
            return (typeof updatedAt === 'string') ? new Date(updatedAt)    :   updatedAt;  
        } else {
            return new Date();
        }

    }

}

export interface NoteInterface {
    id                          :   string;
    header                      :   string;
    text                        :   string;
    updatedAt                   :   Date;
}   
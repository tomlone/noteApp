export class Note {
    public id                   :   string;
    public header               :   string;
    public text                 :   string;
    public updatedAt            :   Date;

    constructor(obj             :   any             =   {}) {
        this.id                 =   obj.id          ||  this.generateId();
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

    private generateId(): string {
        return Math.random().toString().substring(2)+(new Date()).getTime().toString();
    }
}
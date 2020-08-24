import { Pipe, PipeTransform    }   from    '@angular/core';

@Pipe({
    name                        :   'truncateText'
})
export class TruncateTextPipe implements PipeTransform {

    transform(text: string, limit: number = 10, type?: string): string {

		const additionalString		:	string				=	'...';
		if(text) {
            return text.length > limit ? text.substr(0, limit) + additionalString : text;
			// if(text.length > limit) {
			// 	return text.substr(0, limit) + additionalString;
			// } else {
			// 	return text;
			// }
		} else {
			if(type === 'header') {
				return 'New note header';
			} 

			if(type === 'text') {
				return 'New note text';
			}

			return '';
		}
	}

}

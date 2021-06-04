import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'whitespaceFixer'
})
export class WhitespaceFixerPipe implements PipeTransform {

	transform(value: string): string {
		let map: any = {amp: '&', lt: '<', gt: '>', quot: '"', '#039': "'"}
		return value
			.replace(/&([^;]+);/gim, (m, c) => map[c] || m)
			.replace(/\n/gim, "<br>");
	}

}

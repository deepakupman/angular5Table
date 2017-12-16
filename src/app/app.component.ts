import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = "Book App";
	headers = [
		"Title", "Author", "ISBN",
		"PublicationDate", "Publisher",
		"Price", "Genre", "Format"
	];
	displayColumn = {
		"title": false, "author": false,
		"ISBN": false, "PublicationDate": false,
		"Publisher": false, "Price": false,
		"Genre": false, "Format": false
	};
	books = [{
		id: 1,
		title: "Two States",
		author: "Chetan Bhagat",
		ISBN: "HHKH12-KJK5-JLK67",
		PublicationDate: "12-4-2001",
		Publisher: "XYZ",
		Price: '560',
		Genre: 'Romance',
		Format: 'epub'
	},
	{
		id: 2,
		title: "Half Girlfriend",
		author: "Chetan Bhagat",
		ISBN: "HHKH12-KJK5-KJJHHS7",
		PublicationDate: "12-4-2017",
		Publisher: "XYZ",
		Price: '500',
		Genre: 'Romance',
		Format: 'ebook'
	}];

	removeCol(header): void {
		console.log("Closing Column " + header);
		var index = this.headers.indexOf(header);
		if(index >= 0){
			this.headers.splice(index, 1);
		}
		if(!this.displayColumn[header])
			this.displayColumn[header] = true;
	}
}
import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-unsplash-search',
  templateUrl: './unsplash-search.component.html',
  styleUrls: ['./unsplash-search.component.css']
})
export class UnsplashSearchComponent implements OnInit {

	prop:string = "";
	pic:string;
	searchStarted:boolean = true;

	searchUnsplash(searching){
		this.searchStarted = false;
		let url = "https://api.unsplash.com/search/photos/?client_id=d8ba850a24e78fb254312b97c575e9dac5e07887bb961e906d0f5f681cf8df6a&query=" + searching;
		let url2 = "https://talaikis.com/api/quotes/random/";
		this.http.get(url).toPromise().then( data => {
			console.log(data);
			this.pic = data.results[0].urls.regular;
			console.log(this.pic);
			this.http.get(url2).toPromise().then( data2 => {
				this.prop = '"' + data2.quote + '" - ' + data2.author;
			});
		});

	}

	constructor(private http: HttpClient) { }

	ngOnInit() {
	}

}


/*
let pic = pictureInfo.results[0].urls.regular;
console.log(pic);
let description = pictureInfo.results[0].description;
$("#picture").css('background-image','url(' + pic + ')')
$("#imageDescription").html('Description: ' + description + '.');
*/
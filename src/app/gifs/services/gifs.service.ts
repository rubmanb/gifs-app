import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../components/interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string[] = [];

  private APIKEY: string = 'HyoNYqPU2z3ntwPKCHGyog9HTyi06O3I';
  private url: string = 'https://api.giphy.com/v1/gifs';

  public gifList: Gif[] = [];

  constructor(private http: HttpClient) { }


  get tagHistory():string[]{
    return [...this._tagsHistory];
  }

  searchTag(tag: string): void{
    if(tag != ''){
      this._organizedHistory(tag);
      console.log(this._tagsHistory)
    }
    // fetch('https://api.giphy.com/v1/gifs/search?api_key=HyoNYqPU2z3ntwPKCHGyog9HTyi06O3I&q=shitzu&limit=10')
    // .then(res => res.json())
    // .then(data => console.log(data));

    const params = new HttpParams()
      .set('api_key' ,this.APIKEY)
      .set('limit', 10)
      .set('q', tag);

    const response = this.http.get<SearchResponse>(`${this.url}/search`, {params});
    response.subscribe( res => {
      this.gifList = res.data;
      console.log(this.gifList);
    });

  }


  private _organizedHistory(tag: string){
    tag.toLowerCase();

    if(this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10)
  }
}

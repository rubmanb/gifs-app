import { GifsService } from './../../services/gifs.service';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search',
  template: `<h5>Buscar:</h5>
  <input
    type="text"
    class="form-control"
    placeholder="Buscar gifs..."
    (keyup.enter)="searchTag()"
    #txtTagValue
  >
`,
})
export class SearchBoxComponent {

  @ViewChild('txtTagValue')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifService: GifsService){}


  searchTag():void{
    const newTag = this.tagInput.nativeElement.value;
    // console.log(newTag)
    this.gifService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }

}

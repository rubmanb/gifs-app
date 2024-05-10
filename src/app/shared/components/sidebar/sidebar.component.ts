import { Component, ElementRef } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  public tag!: ElementRef<HTMLInputElement>;
  public listTags: string[] =[];

  constructor(private gifsService: GifsService){}

  get tags(){
    return this.gifsService.tagHistory;
  }

  searchAgainTag(tag: string){
    this.gifsService.searchTag(tag);
  }
}

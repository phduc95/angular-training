import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit {

  onSubmit(mediaItem){
    console.log(mediaItem);
  }
  constructor() { }

  ngOnInit() {
  }

}

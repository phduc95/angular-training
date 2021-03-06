import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent{
  form;

  ngOnInit(){
    this.form = new FormGroup({
      medium:new FormControl('Movies'),
      name:new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')])),
      category:new FormControl(''),
      year:new FormControl(''),
    });
  }

  onSubmit(mediaItem){
    console.log(mediaItem);
  }

}

import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'media-item',
  templateUrl: 'media-item.component.html',
  styleUrls: ['media-item.component.css']
})
export class MediaItemComponent { 
    @Input() mediaItem;
    @Output() delete= new EventEmitter();
    
    onDelete(){
        this.delete.emit(this.mediaItem);
    }

    onWatch(){
        console.log("This will get the info of data");
    }
}
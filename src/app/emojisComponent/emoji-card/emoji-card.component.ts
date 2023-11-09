import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-emoji-card',
  templateUrl: './emoji-card.component.html',
  styleUrls: ['./emoji-card.component.css']
})
export class EmojiCardComponent implements OnInit{
@Input() emoji: any=null;
@Output() changeEtatEmoji = new EventEmitter<any>();
checkBoxControl:boolean=false;
ImagePath: string = '';
ngOnInit(): void {
  this.ImagePath = "../../../assets/"+this.emoji.Image;
  this.checkBoxControl=this.emoji.majeur;
}
onValueChange(newValue: any) {
  this.emoji.majeur = newValue;
  this.changeEtatEmoji.emit(this.emoji);
}

}

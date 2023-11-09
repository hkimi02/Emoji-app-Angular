import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'depot_angular';
  nb_maj:number=0;
  tabPersonnages = [
    {id:1,nom:'laugh', Image:'emoji1.png', nb: 44, majeur:true},
    {id:2,nom:'lovely', Image:'emoji2.jfif', nb: 16, majeur:true},
    {id:3,nom:'blink', Image:'emoji3.jfif', nb: 12, majeur:false},
    {id:4,nom:'blink', Image:'emoji3.jfif', nb: 12, majeur:false},
    ];
    ngOnInit(): void {
      this.nb_maj = this.tabPersonnages.filter(p => p.majeur).length;
    }
    changeMaj(emoji:any){
      const foundEmoji = this.tabPersonnages.find(p => p.id === emoji.id);
      if (foundEmoji) {
        foundEmoji.majeur = emoji.majeur;
    }
      this.nb_maj = this.tabPersonnages.filter(p => p.majeur).length;
    }
}

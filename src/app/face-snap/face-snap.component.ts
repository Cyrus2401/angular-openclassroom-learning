import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;

  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  isSnapped!: boolean;
  inputValue!: string;

  ngOnInit() {
    this.title = 'Cyrus Jr';
    this.description = 'Ceci est un description. Une grande description. Une tres grande description.';
    this.createdDate = new Date();
    this.faceSnap.snaps = 6;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.isSnapped = false;
    this.faceSnap.snaps = 200;
    this.inputValue = "Oh Snap !";
  }

  onSnap() {
    if(!this.isSnapped){
      this.faceSnap.snaps++;
      this.isSnapped = true;
      this.inputValue = "Oops, un Snap !";
    }
    else{
      this.faceSnap.snaps--;
      this.isSnapped = false;
      this.inputValue = "Oh Snap !";
    }
  }

}

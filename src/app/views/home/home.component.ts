import { Component, OnInit } from '@angular/core';
import { SpectsText } from 'src/app/core/interfaces/ReadText';
import { arrayText } from '../../arrayText';
import { calculateReadingTime } from '../../calculateReadingTime';
import { ReadText } from '../../core/interfaces/ReadText';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public exampleText!: SpectsText[];
  public isOpen: Boolean = false;
  public selectedText!: SpectsText;

  constructor() {}

  ngOnInit(): void {
    this.setupStrem();
  }

  public setupStrem(): void {
    this.exampleText = arrayText.map((item: ReadText) => ({
      ...item,
      time: calculateReadingTime(item.text),
      chText: item.text.trim().split(/\s+/).length,
      minText: item.text.slice(0, 350),
    }));
  }

  public seeMore(item: any): void {
    this.isOpen = true;
    this.selectedText = item;
    console.log(this.selectedText);
  }

  public closeModal(): void {
    this.isOpen = false;
  }
}

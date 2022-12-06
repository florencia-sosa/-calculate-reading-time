import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { calculateReadingTime } from '../../calculateReadingTime';

@Component({
  selector: 'app-estimator',
  templateUrl: './estimator.component.html',
  styleUrls: ['./estimator.component.scss'],
})
export class EstimatorComponent implements OnInit {
  public readingForm!: FormGroup;
  public readingTime!: number;
  public text: string = '';
  public isOpen: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.setUpForm();
  }

  public setUpForm() {
    this.readingForm = this.fb.group({
      text: ['', [Validators.required, Validators.minLength(1)]],
    });
  }
  public onSubmit() {
    this.date();
    this.isOpen = true;
    this.readingForm.reset()
  }
  public date() {
    this.text = this.readingForm.value.text || '';
    this.readingTime = calculateReadingTime(this.text);
  }
  public closeModal(){
    this.isOpen = false;
  }
}

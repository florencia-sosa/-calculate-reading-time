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
  public text: string = '';
  public readingTime!: number;
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
  }
  public date() {
    this.text = this.readingForm.value.text || '';
    this.readingTime = calculateReadingTime(this.text);
    this.readingTime > 1
      ? alert(`Tardarás ${this.readingTime} minutos`)
      : alert(`Tardarás menos de ${this.readingTime} minuto`);
  }
}

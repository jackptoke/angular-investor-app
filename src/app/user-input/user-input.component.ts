import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

interface UserInputs {
  initInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
}

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initInvestment = signal(1000);
  annualInvestment = signal(100);
  expectedReturn = signal(5);
  duration = signal(10);

  constructor(private investmentService: InvestmentService) { }

  onInputValueChanged() {
    this.investmentService.calculateInvestmentResults({
      initInvestment: this.initInvestment(),
      annualInvestment: this.annualInvestment(),
      expectedReturn: this.expectedReturn(),
      duration: this.duration()
    });

    this.resetInputs();
  }

  resetInputs() {
    this.initInvestment.set(1000);
    this.annualInvestment.set(100);
    this.expectedReturn.set(5);
    this.duration.set(10);
  }
}

import { Component, computed, inject, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-results',
  imports: [CurrencyPipe],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {
  private investmentService = inject(InvestmentService);

  // get results() {
  //   return this.investmentService.getInvestmentResults();
  // }
  // results = computed(() => this.investmentService.getInvestmentResults());
  results = this.investmentService.annualData.asReadonly();
}

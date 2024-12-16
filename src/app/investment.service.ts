import { Injectable, signal } from "@angular/core";
import { UserInputs } from "./user-input/user-input.model";
import { Result } from "./results/result.model";

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  annualData = signal<Array<Result>>(Array());

  calculateInvestmentResults(userInputData: UserInputs) {
    var investedCapital = userInputData.initInvestment;
    var interest = 0;
    var totalInterest = 0;
    var investmentValue = userInputData.initInvestment;
    const data = Array();

    for(let year = 1; year <= userInputData.duration; year++) {
      investedCapital += userInputData.annualInvestment;
      interest = (userInputData.expectedReturn/100) * (investmentValue + userInputData.annualInvestment);
      totalInterest += interest;
      investmentValue = interest + investmentValue + userInputData.annualInvestment;
      data.push({ col1: year, col2: investmentValue, col3: interest, col4: totalInterest, col5: investedCapital});
    }
    this.annualData.set(data);
  }

  // getInvestmentResults() {
  //   return this.annualData();
  // }
}

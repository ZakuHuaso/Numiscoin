import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class CalculatorPage {
  calculatorDisplay: string = ''; // The full expression being built
  calculatorResult: string = '0'; // The current result or 0

  private lastInputWasOperator: boolean = false;
  private hasEvaluated: boolean = false;

  constructor() {}

  /**
   * Handles button clicks for numbers and operators.
   * @param value The value of the button clicked (e.g., '1', '+', 'Ac').
   */
  onButtonClick(value: string) {
    if (value === '=') {
      this.calculateResult();
      return;
    }

    if (value === 'Ac') {
      this.clearDisplay();
      return;
    }

    if (value === 'Ce') {
      // New 'Ce' button handling
      this.clearEntry();
      return;
    }

    if (value === 'backspace') {
      this.deleteLastCharacter();
      return;
    }

    // Handle operator input
    const isOperator = ['+', '-', '*', '/', '.'].includes(value);

    if (this.hasEvaluated && !isOperator) {
      this.calculatorDisplay = '';
      this.calculatorResult = '0';
      this.hasEvaluated = false;
    } else if (this.hasEvaluated && isOperator) {
      this.calculatorDisplay = this.calculatorResult;
      this.hasEvaluated = false;
    }

    // Prevent multiple operators or decimals in a row
    if (isOperator && this.lastInputWasOperator) {
      this.calculatorDisplay = this.calculatorDisplay.slice(0, -1) + value;
    } else if (
      value === '.' &&
      this.calculatorDisplay.includes('.') &&
      this.calculatorDisplay
        .split(/[\+\-\*\/]/)
        .pop()
        ?.includes('.')
    ) {
      return;
    } else {
      this.calculatorDisplay += value;
    }

    this.lastInputWasOperator = isOperator;
    this.calculatorResult = this.calculatorDisplay;
  }

  /**
   * Clears the display and resets the calculator state. (All Clear)
   */
  clearDisplay() {
    this.calculatorDisplay = '';
    this.calculatorResult = '0';
    this.lastInputWasOperator = false;
    this.hasEvaluated = false;
  }

  /**
   * Clears the current entry or the last number entered. (Clear Entry)
   */
  clearEntry() {
    if (this.hasEvaluated) {
      // If a calculation was just performed, clear the result only
      this.calculatorResult = '0';
      this.calculatorDisplay = ''; // Or keep the expression if desired, depends on CE logic
      this.hasEvaluated = false;
    } else {
      // Find the last number or segment to clear
      const operators = ['+', '-', '*', '/'];
      let lastOperatorIndex = -1;

      for (let i = this.calculatorDisplay.length - 1; i >= 0; i--) {
        if (operators.includes(this.calculatorDisplay[i])) {
          lastOperatorIndex = i;
          break;
        }
      }

      if (lastOperatorIndex !== -1) {
        // Clear from the last operator onwards
        this.calculatorDisplay = this.calculatorDisplay.substring(
          0,
          lastOperatorIndex + 1
        );
      } else {
        // No operator found, clear the entire display (like Ac)
        this.calculatorDisplay = '';
      }
      this.calculatorResult = '0'; // Reset result display
    }
    this.lastInputWasOperator = false;
  }

  /**
   * Deletes the last character from the display.
   */
  deleteLastCharacter() {
    if (this.calculatorDisplay.length > 0) {
      this.calculatorDisplay = this.calculatorDisplay.slice(0, -1);
      if (this.calculatorDisplay === '') {
        this.calculatorResult = '0';
      } else {
        this.calculatorResult = this.calculatorDisplay;
      }
      this.lastInputWasOperator = false;
    }
  }

  /**
   * Evaluates the expression in `calculatorDisplay` and updates `calculatorResult`.
   */
  calculateResult() {
    if (this.calculatorDisplay === '') {
      this.calculatorResult = '0';
      return;
    }

    try {
      if (
        ['+', '-', '*', '/', '.'].includes(this.calculatorDisplay.slice(-1))
      ) {
        this.calculatorDisplay = this.calculatorDisplay.slice(0, -1);
      }

      const func = new Function('return ' + this.calculatorDisplay);
      let result = func();

      if (isNaN(result) || !isFinite(result)) {
        this.calculatorResult = 'Error';
      } else {
        this.calculatorResult = result.toLocaleString('es-CL');
      }
      this.hasEvaluated = true;
      this.lastInputWasOperator = false;
    } catch (e) {
      this.calculatorResult = 'Error';
      this.hasEvaluated = true;
      this.lastInputWasOperator = false;
    }
  }

  onSpecialFunctionClick(func: string) {
    console.log(`Special function: ${func} clicked.`);
    // Implement specific logic for 'e', 'sin', 'deg' here if needed.
    // For now, these are just placeholders.
    // Example: if (func === 'sin') { this.calculatorDisplay += 'Math.sin('; }
  }
}

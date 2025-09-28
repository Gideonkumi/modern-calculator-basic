import { useState } from "react";
import { Delete, RotateCcw } from "lucide-react";

interface CalculatorState {
  display: string;
  previousValue: number | null;
  operation: string | null;
  waitingForNewNumber: boolean;
  hasError: boolean;
}

const Calculator = () => {
  const [state, setState] = useState<CalculatorState>({
    display: "0",
    previousValue: null,
    operation: null,
    waitingForNewNumber: false,
    hasError: false,
  });

  const inputNumber = (num: string) => {
    if (state.hasError) {
      setState(prev => ({ ...prev, hasError: false, display: num, waitingForNewNumber: false }));
      return;
    }

    if (state.waitingForNewNumber) {
      setState(prev => ({ ...prev, display: num, waitingForNewNumber: false }));
    } else {
      setState(prev => ({
        ...prev,
        display: prev.display === "0" ? num : prev.display + num,
      }));
    }
  };

  const inputOperation = (nextOperation: string) => {
    const inputValue = parseFloat(state.display);

    if (state.hasError) {
      setState(prev => ({ ...prev, hasError: false }));
      return;
    }

    if (state.previousValue === null) {
      setState(prev => ({
        ...prev,
        previousValue: inputValue,
        waitingForNewNumber: true,
        operation: nextOperation,
      }));
    } else if (state.operation) {
      const currentValue = state.previousValue || 0;
      const newValue = calculate(currentValue, inputValue, state.operation);

      if (newValue === null) {
        setState(prev => ({
          ...prev,
          display: "Error",
          hasError: true,
          previousValue: null,
          operation: null,
          waitingForNewNumber: true,
        }));
        return;
      }

      setState(prev => ({
        ...prev,
        display: String(newValue),
        previousValue: newValue,
        waitingForNewNumber: true,
        operation: nextOperation,
      }));
    }
  };

  const calculate = (firstValue: number, secondValue: number, operation: string): number | null => {
    switch (operation) {
      case "+":
        return firstValue + secondValue;
      case "-":
        return firstValue - secondValue;
      case "×":
        return firstValue * secondValue;
      case "÷":
        if (secondValue === 0) {
          return null; // Division by zero error
        }
        return firstValue / secondValue;
      default:
        return secondValue;
    }
  };

  const performCalculation = () => {
    if (state.operation && state.previousValue !== null && !state.hasError) {
      const inputValue = parseFloat(state.display);
      const newValue = calculate(state.previousValue, inputValue, state.operation);

      if (newValue === null) {
        setState(prev => ({
          ...prev,
          display: "Error",
          hasError: true,
          previousValue: null,
          operation: null,
          waitingForNewNumber: true,
        }));
      } else {
        setState(prev => ({
          ...prev,
          display: String(newValue),
          previousValue: null,
          operation: null,
          waitingForNewNumber: true,
        }));
      }
    }
  };

  const inputDecimal = () => {
    if (state.hasError) {
      setState(prev => ({ ...prev, hasError: false, display: "0.", waitingForNewNumber: false }));
      return;
    }

    if (state.waitingForNewNumber) {
      setState(prev => ({ ...prev, display: "0.", waitingForNewNumber: false }));
    } else if (state.display.indexOf(".") === -1) {
      setState(prev => ({ ...prev, display: prev.display + "." }));
    }
  };

  const clearAll = () => {
    setState({
      display: "0",
      previousValue: null,
      operation: null,
      waitingForNewNumber: false,
      hasError: false,
    });
  };

  const deleteLast = () => {
    if (state.hasError) {
      clearAll();
      return;
    }

    if (state.display.length > 1) {
      setState(prev => ({ ...prev, display: prev.display.slice(0, -1) }));
    } else {
      setState(prev => ({ ...prev, display: "0" }));
    }
  };

  const formatDisplay = (value: string) => {
    if (value === "Error") return value;
    
    // Limit display to prevent overflow
    if (value.length > 12) {
      const num = parseFloat(value);
      if (num > 999999999999) {
        return num.toExponential(5);
      }
      return num.toPrecision(12);
    }
    return value;
  };

  return (
    <div className="glass-effect border border-calculator-border rounded-3xl p-8 w-full max-w-sm mx-auto">
      {/* Display */}
      <div className="bg-display-bg rounded-2xl p-6 mb-6 border border-calculator-border">
        <div 
          className={`text-right text-4xl font-mono font-semibold ${
            state.hasError ? "text-button-danger" : "text-display-text"
          }`}
          style={{ boxShadow: "var(--shadow-display)" }}
        >
          {formatDisplay(state.display)}
        </div>
      </div>

      {/* Button Grid */}
      <div className="grid grid-cols-4 gap-3">
        {/* Row 1 */}
        <button
          onClick={clearAll}
          className="calculator-button bg-button-danger hover:bg-button-danger-hover text-button-danger-foreground col-span-2 py-4"
        >
          <RotateCcw size={20} className="mx-auto" />
        </button>
        <button
          onClick={deleteLast}
          className="calculator-button bg-button-secondary hover:bg-button-secondary-hover text-button-secondary-foreground py-4"
        >
          <Delete size={20} className="mx-auto" />
        </button>
        <button
          onClick={() => inputOperation("÷")}
          className="calculator-button bg-button-operator hover:bg-button-operator-hover text-button-operator-foreground py-4"
        >
          ÷
        </button>

        {/* Row 2 */}
        <button
          onClick={() => inputNumber("7")}
          className="calculator-button bg-button-secondary hover:bg-button-secondary-hover text-button-secondary-foreground py-4"
        >
          7
        </button>
        <button
          onClick={() => inputNumber("8")}
          className="calculator-button bg-button-secondary hover:bg-button-secondary-hover text-button-secondary-foreground py-4"
        >
          8
        </button>
        <button
          onClick={() => inputNumber("9")}
          className="calculator-button bg-button-secondary hover:bg-button-secondary-hover text-button-secondary-foreground py-4"
        >
          9
        </button>
        <button
          onClick={() => inputOperation("×")}
          className="calculator-button bg-button-operator hover:bg-button-operator-hover text-button-operator-foreground py-4"
        >
          ×
        </button>

        {/* Row 3 */}
        <button
          onClick={() => inputNumber("4")}
          className="calculator-button bg-button-secondary hover:bg-button-secondary-hover text-button-secondary-foreground py-4"
        >
          4
        </button>
        <button
          onClick={() => inputNumber("5")}
          className="calculator-button bg-button-secondary hover:bg-button-secondary-hover text-button-secondary-foreground py-4"
        >
          5
        </button>
        <button
          onClick={() => inputNumber("6")}
          className="calculator-button bg-button-secondary hover:bg-button-secondary-hover text-button-secondary-foreground py-4"
        >
          6
        </button>
        <button
          onClick={() => inputOperation("-")}
          className="calculator-button bg-button-operator hover:bg-button-operator-hover text-button-operator-foreground py-4"
        >
          −
        </button>

        {/* Row 4 */}
        <button
          onClick={() => inputNumber("1")}
          className="calculator-button bg-button-secondary hover:bg-button-secondary-hover text-button-secondary-foreground py-4"
        >
          1
        </button>
        <button
          onClick={() => inputNumber("2")}
          className="calculator-button bg-button-secondary hover:bg-button-secondary-hover text-button-secondary-foreground py-4"
        >
          2
        </button>
        <button
          onClick={() => inputNumber("3")}
          className="calculator-button bg-button-secondary hover:bg-button-secondary-hover text-button-secondary-foreground py-4"
        >
          3
        </button>
        <button
          onClick={() => inputOperation("+")}
          className="calculator-button bg-button-operator hover:bg-button-operator-hover text-button-operator-foreground py-4"
        >
          +
        </button>

        {/* Row 5 */}
        <button
          onClick={() => inputNumber("0")}
          className="calculator-button bg-button-secondary hover:bg-button-secondary-hover text-button-secondary-foreground col-span-2 py-4"
        >
          0
        </button>
        <button
          onClick={inputDecimal}
          className="calculator-button bg-button-secondary hover:bg-button-secondary-hover text-button-secondary-foreground py-4"
        >
          .
        </button>
        <button
          onClick={performCalculation}
          className="calculator-button bg-button-primary hover:bg-button-primary-hover text-button-primary-foreground py-4"
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
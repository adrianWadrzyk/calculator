import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { NullTemplateVisitor } from '@angular/compiler';
import { CalculatorService} from '../calculator.service';
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {
  liczba1 = 2;
  liczba2 = 3;
  output = 0; 
  numbers = [0,1,2,3,4,5,6,7,8,9];
  currentIndex= 0;
  constructor(private calculatorService: CalculatorService) { }

  ngOnInit(): void {
    console.log(this.numbers);
  }

  sum() { 
    this.output = this.calculatorService.sum(this.liczba1, this.liczba2);
  }

  sub() { 
    this.output = this.calculatorService.sub(this.liczba1, this.liczba2);
  }

  mul() { 
    this.output = this.calculatorService.mul(this.liczba1, this.liczba2);
  }

  div() { 
    this.output = this.calculatorService.div(this.liczba1, this.liczba2);
  }

  onFocusInput(index) {
      this.currentIndex = index; 
    }

  addToInput(value) { 
    if(this.currentIndex === 1) 
    {
      this.liczba1 = parseInt(this.liczba1.toString()+value);
    } else { 
      this.liczba2 = parseInt(this.liczba1.toString()+value);
    }
     
  }
/*
  function RPN() {
    var stack = [];
  
    {
        if (v === '+') {
            var res = stack.pop() + stack.pop();
            stack.push(res);
            return;
        }
        if (v === '*') {
            var res = stack.pop() * stack.pop();
            stack.push(res);
            return;
        }
        if (v === '-') {
            var res = stack.pop() - stack.pop();
            stack.push(res);
            return;
        }
        if (v === '/') {
            var res = stack.pop() / stack.pop();
            stack.push(res);
            return;
        }
        if (v === '=') {
            return stack.pop();
        }
        stack.push(v);
    };
    return f;
}*/
}
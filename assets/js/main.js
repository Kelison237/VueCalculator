
new Vue({
    el: '#root',
    data: {
        calculatorValue: 0,
        operator: null,
        prevCalcValue: '',
        elements: [7,8,9,'C','%',4,5,6,'*','/',1,2,3,'+','-',0,'.','Ans','=']
    },
methods: {
    active(n) {
        if(n === 'C'){
            this.calculatorValue = '';
        }
        if(!isNaN(n) || n === '.'){
            this.calculatorValue += n +  '';
        }
        if(n === '%'){
            this.calculatorValue /= 100 + '';
        }
        
        if(['*','/','+','-'].includes(n)){
            this.operator = n;
            this.prevCalcValue = this.calculatorValue;
            // this.calculatorValue =this.prevCalcValue+ n+ this.calculatorValue;
            this.calculatorValue = '';
        }
        if(['=','Ans'].includes(n)){
            this.calculatorValue = eval(
                this.prevCalcValue + this.operator + this.calculatorValue
            );
            this.prevCalcValue = '';
            this.operator = null;
        }
    }
}
})


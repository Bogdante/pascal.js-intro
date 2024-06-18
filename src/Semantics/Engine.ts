import { Addition } from '../SyntaxAnalyzer/Tree/Addition';
import { Multiplication } from '../SyntaxAnalyzer/Tree/Multiplication';
import { Subtraction } from '../SyntaxAnalyzer/Tree/Subtraction';
import { Division } from '../SyntaxAnalyzer/Tree/Division';
import { NumberConstant } from '../SyntaxAnalyzer/Tree/NumberConstant';
import { NumberVariable } from './Variables/NumberVariable';
import { TreeNodeBase } from '../SyntaxAnalyzer/Tree/TreeNodeBase';
import { UnaryMinus } from 'src/SyntaxAnalyzer/Tree/UnaryMinus';
import { Equation } from 'src/SyntaxAnalyzer/Tree/Equation';
import { Variable } from 'src/SyntaxAnalyzer/Tree/Variable';


export class Engine {
    /**
     * Результаты вычислений (изначально - один для каждой строки)
     */
    results: number[];

    /**
     * Деревья, которые получает на вход движок,
     * тип в данном случае определен как TreeNodeBase, потому что на верхнем уровне любого уровня 
     * лежит какой-то узел, описывающий по сути "последнюю" по вложенности операцию
     */
    trees: TreeNodeBase[];

    hashMap;

    constructor(trees: TreeNodeBase[]) {
        this.trees = trees;
        this.results = [];
        this.hashMap = new Map();
    }

    run() {
        let self = this;

        this.trees.forEach(

            function (tree) {
                let result = self.evaluateSimpleExpression(tree);
                console.log(result.value);
                self.results.push(result.value); // пишем в массив результатов
            }
        );

    }

    evaluateSimpleExpression(expression: TreeNodeBase): NumberVariable {

        if (expression instanceof Addition
            || expression instanceof Subtraction
            || expression instanceof Equation) {

            let leftOperand = this.evaluateSimpleExpression(expression.left);
            let rightOperand = this.evaluateSimpleExpression(expression.right);
            let result: number | null = null;
            if (expression instanceof Addition) {
                result = leftOperand.value + rightOperand.value;
            } else if (expression instanceof Subtraction) {
                result = leftOperand.value - rightOperand.value;
            } else if (expression instanceof Equation) {

                if(expression.left instanceof Variable) {
                    this.hashMap.set(expression.left.symbol.value, rightOperand.value);
                }
                result = rightOperand.value;
            }

            return new NumberVariable(result as number);

        } else {
            return this.evaluateTerm(expression);
        }
    }

    evaluateTerm(expression: TreeNodeBase) {
        if (expression instanceof Multiplication) {
            let leftOperand = this.evaluateSimpleExpression(expression.left);
            let rightOperand = this.evaluateSimpleExpression(expression.right);

            let result = leftOperand.value * rightOperand.value;

            return new NumberVariable(result);
        } else if (expression instanceof Division) {
            let leftOperand = this.evaluateSimpleExpression(expression.left);
            let rightOperand = this.evaluateSimpleExpression(expression.right);
            let result = leftOperand.value / rightOperand.value;

            return new NumberVariable(result);
        } else if (expression instanceof UnaryMinus) { 
            let result = this.evaluateSimpleExpression(expression.value);
            return new NumberVariable(-result.value);
        }else {
            return this.evaluateMultiplier(expression);
        }
    }

    evaluateMultiplier(expression: TreeNodeBase) {
        if (expression instanceof NumberConstant) {
            return new NumberVariable(expression.symbol.value);
        } else if(expression instanceof Variable) {
            return new NumberVariable(this.hashMap.get(expression.symbol.value));
        }else {
            throw `Number Constant expected. ${expression.symbol.stringValue}`;
        }
    }
};
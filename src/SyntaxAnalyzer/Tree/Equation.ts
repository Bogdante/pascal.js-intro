import { BinaryOperation } from "./BinaryOperation";
import { TreeNodeBase } from "./TreeNodeBase";
import { SymbolBase } from '../../LexicalAnalyzer/Symbols/SymbolBase';

export class Equation extends BinaryOperation{
    
    constructor(symbol: SymbolBase, identifier: TreeNodeBase, expr: TreeNodeBase) {
        super(symbol, identifier, expr);
    }
}
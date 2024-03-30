import { SymbolBase } from '../../LexicalAnalyzer/Symbols/SymbolBase';
import { BinaryOperation } from './BinaryOperation';
import { TreeNodeBase } from './TreeNodeBase';

export class Multiplication extends BinaryOperation
{
    constructor(symbol: SymbolBase, left: TreeNodeBase, right: TreeNodeBase)
    {
        super(symbol, left, right);
    }
}
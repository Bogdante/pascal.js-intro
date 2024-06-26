import { SymbolBase } from '../../LexicalAnalyzer/Symbols/SymbolBase';
import { UnaryOperation } from './UnaryOperation';
import { TreeNodeBase } from './TreeNodeBase';

export class UnaryMinus extends UnaryOperation
{
    constructor(symbol: SymbolBase, value: TreeNodeBase)
    {
        super(symbol, value);
    }
}
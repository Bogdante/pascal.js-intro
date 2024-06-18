import { SymbolBase } from '../../LexicalAnalyzer/Symbols/SymbolBase';
import { TreeNodeBase } from './TreeNodeBase';

export class UnaryOperation extends TreeNodeBase
{
    value: TreeNodeBase;

    constructor(symbol: SymbolBase, value: TreeNodeBase)
    {
        super(symbol);
        this.value = value;
    }
}
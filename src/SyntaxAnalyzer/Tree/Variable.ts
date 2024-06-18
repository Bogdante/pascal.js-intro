import { TreeNodeBase } from "./TreeNodeBase";
import { SymbolBase } from '../../LexicalAnalyzer/Symbols/SymbolBase';


export class Variable extends TreeNodeBase {
    constructor(symbol: SymbolBase) {
        super(symbol);
    }
}
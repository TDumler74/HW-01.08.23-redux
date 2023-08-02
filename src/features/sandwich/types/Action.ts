type Action =
|{type:'addBread', payload:string}
|{type:'addCheese', payload:string }
|{type:'addSalami', payload:string}
|{type:'handleClear', payload:string};
export default Action;    export default interface SandwichState {
    [x: string]: string;
    value: string;
};
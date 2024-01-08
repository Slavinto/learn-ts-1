export type Person = {
    kind: "worker" | "academic" | "engineer";
    name: string;
    age: number;
};

export interface IPerson {
    name: string;
    age: number;
}

export type PersonLoggerFn = (name: TestText, age?: number) => string;

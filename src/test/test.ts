import type { PersonLoggerFn, IPerson, Person } from "@/types/test";
import { CPerson } from "@/test/testClasses";
import { Component } from "react";
import { NextServer } from "next/dist/server/next";

const test = () => {
    type Person = {
        name: string;
        age: number;
        isProgrammer?: boolean;
        friends?: string[];
        address?: {
            city: string;
            zipCode: string;
            street: string;
            house: number | string;
        };
    };

    const person: Person = {
        name: "slava",
        age: 41,
        friends: [],
        address: {
            city: "Korolev",
            zipCode: "019234",
            street: "sdfasdf",
            house: 6,
        },
    };
    person.isProgrammer = true;
    function printPerson({ name, age }: Person) {}

    const obj = { name: "Slava", age: 41 };
    printPerson(obj);

    function summWithCallback(a: number, b: number, cb: (sum: number) => void) {
        cb(a + b);
    }

    type Todo = {
        name: string;
        status: "draft" | "incomlete" | "complete";
    };

    const todo: Todo = { name: "text", status: "draft" };
    interface TodoInterface {
        todos: {
            id: string;
            number: number;
            quality: string;
        };
    }
    interface PersonFull extends IPerson, TodoInterface {
        full: string;
    }
    class PersonFull implements PersonFull {
        full: string;
        name: string;
        constructor(full: string, name: string) {
            this.full = full;
            this.name = name;
        }
    }

    type NumberArray = readonly number[];

    class SomePerson extends CPerson {
        name: string;
        constructor(name: string, age: number) {
            super(name, age);
            this.name = name;
        }
    }

    const person1 = { name: "Slava", age: 41 };

    function getValue(key: keyof Person, person: Person) {
        return person[key];
    }

    type Address = Person["address"];

    const SKILL_LEVELS = ["beginner", "intermediate", "expert"] as const;

    type PlayerType = {
        name: string;
        skillLevel: (typeof SKILL_LEVELS)[number];
    };
    type PlayersGroupedBySkillLevel = {
        [index in PlayerType["skillLevel"]]: PlayerType["name"][];
    };
    const players: PlayersGroupedBySkillLevel = {
        beginner: ["player1", "player2", "player234"],
        intermediate: ["player123", "player45", "player2345"],
        expert: ["player145", "player342", "player2343t4"],
    };

    console.log(players);

    const a = { name: "asdf", age: 3, isProgrammer: true } as const;

    const df: typeof a.name = "asdf";

    const nums = ["1", "2", "3"] as const;

    type SomeType<T1, T2, T3, T4> = {
        name: T1;
        age: T2;
        isProgrammer: T3;
        address: T4;
    };

    type SomeObjectType = {
        street: string;
        zipCode: number;
    };

    const obj1: SomeType<string, number, boolean, SomeObjectType> = {
        name: "Slava",
        age: 41,
        isProgrammer: true,
        address: {
            street: "sdf",
            zipCode: 345,
        },
    };

    function getSecond<T>(array: T[]): T {
        return array[1];
    }

    const arr = [1, 2, 3];
    const arr2 = ["dsfgdsg", false, 3];
    const resultArray: any = [];
    resultArray.push(getSecond(arr));
    resultArray.push(getSecond(arr2));

    console.log(resultArray);

    const set1 = new Set<string>(["dsfd"]);
    set1.add("dsfd");
    set1.add("dsfd");
    console.log(set1);

    type ResponseUserData = APIResponse<{
        name: string;
        age: number;
        payload: object[];
    }>;

    type ResponseData = APIResponse<{
        payload: object[];
        responseCode: number;
    }>;

    type APIResponse<
        TData extends object = { responseCode: number; payload: Array<object> }
    > = {
        data: TData;
        isError: boolean;
    };

    const response: ResponseData = {
        data: {
            payload: [{ headers: "response text" }],
            responseCode: 200,
        },
        isError: false,
    };

    const userResponse: ResponseUserData = {
        data: {
            name: "Slava",
            age: 134,
            payload: [
                { objectData: "dfsasdf" },
                { objectData: "dfsasdf" },
                { objectData: "dfsasdf" },
                { objectData: "dfsasdf" },
                { objectData: "dfsasdf" },
            ],
        },
        isError: false,
    };
    type TupleValues = string | number | boolean;
    type Tuple = [string, TupleValues];
    type OutputObject = Record<string, TupleValues>;
    // {
    //     [key: string]: string | number | boolean;
    // };

    function ArrayToObject<T extends Tuple>(array: T[]): OutputObject {
        let output: OutputObject = {};
        array.forEach((tuple: T) => {
            output = { ...output, [tuple[0]]: tuple[1] };
        });
        return output;
    }

    const x = ArrayToObject([
        ["gfsdag", "3245"],
        ["23", 2134],
        ["2341fsda", false],
    ]);
    console.log(x);

    function wait(duration: number): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            setTimeout(() => resolve("Timeout: " + duration + "ms"), duration);
            reject((err: Error) => console.log(err.message));
        });
    }

    wait(3000)
        .then((data) => console.log(data))
        .catch((err) => console.log(err.message));

    type Todo1 = {
        title: string;
        completed: boolean;
    };

    type FormTodo = Partial<Pick<Todo1, "title">> & Omit<Todo1, "title">;

    const test342: FormTodo = { completed: true };

    function checkLength(a: string, b: number): boolean {
        return a.length < b;
    }

    type ReturnOfLengthCheck = ReturnType<typeof checkLength>;

    type Person2 = {
        age: number;
        name: string;
    };

    type PeopleGroupedByName = {
        [index: string]: Person2[];
    };

    type PeopleGroupedByName2 = Record<Person2["name"], Person2[]>;

    const wer = {
        name: "Slava",
        age: 41,
        isProgrammer: true,
    } as const;

    type TestType = typeof wer;

    type Async = Promise<Promise<string>>;

    type Value = Awaited<ReturnType<typeof doSomething>>;

    async function doSomething() {
        return 3;
    }

    type Todo2 = {
        title: string;
        priority: "High" | "Normal" | "Low" | "Super Low";
        isComplete: boolean;
        description?: string;
        dueDate: Date | string;
    };

    function extendTodo(todo: Todo2) {
        switch (todo.priority) {
            case "High":
                console.log(todo.priority);
                break;
            case "Normal":
                console.log("Normal");
                console.log(todo.priority);
                break;
            case "Low":
                console.log("low");
                console.log(todo.priority);
                break;
            case "Super Low":
                console.log("Super Low priority");
                break;

            default:
                const exhaustiveCheck: never = todo.priority;
                break;
        }
    }

    const form = document.querySelector<HTMLFormElement>(".form__container");
    form?.addEventListener("submit", (e) => console.log(e.target));

    function data(data: unknown) {
        if (
            data != null &&
            typeof data === "object" &&
            "name" in data &&
            typeof data.name === "string"
        ) {
            console.log(data.name.length);

            data.name = "agfdsgsa";
        }

        fetch("sdlfjlas")
            .then((res) => res.json())
            .then((data) => {
                return data as Todo;
            })
            .then((todo) => console.log(todo.status));
        const a: number = 4;
        (a as unknown as string).length;
    }

    const todo5 = {
        title: "testTodo",
        priority: "High",
        isComplete: true,
        dueDate: new Date(),
    } satisfies Todo2;

    todo5.dueDate.setDate(4);

    type UserApiResponse = SuccessResponse | ErrorResponse;

    type SuccessResponse = {
        status: "Success";
        data: { id: string; name: string };
    };

    type ErrorResponse = {
        status: "Error";
        errorMessage: string;
    };

    function handleResponse(res: UserApiResponse) {
        if (res.status === "Success") {
            console.log(res.data.name);
        } else {
            console.log(res.errorMessage.length);
        }
    }

    function sum(a: number[]): number;
    function sum(a: number, b: number): number;
    function sum(a: number | number[], b?: number) {
        if (typeof a === "number" && !b) {
            return a;
        } else if (
            Array.isArray(a) &&
            a.every((el) => typeof el === "number") &&
            !b
        ) {
            return a.reduce((acc, el) => acc + el, 0);
        } else if (typeof a === "number" && typeof b === "number") {
            return a + b;
        } else {
            return;
        }
    }
    const s2 = sum(1, 2);

    const priority = ["High", "Medium", "Low"] as const;
    type Priority = (typeof priority)[number];
    type Todo3 = {
        title: string;
        description: string;
    };

    function func(todo: Todo3) {
        if (isPriority(todo.description)) {
            console.log(todo.description);
        } else {
            todo.description;
        }
    }

    function isPriority(description: string): description is Priority {
        // return priority.includes(description);
        return description in priority;
    }

    type Options = {
        debug: boolean;
        format: {
            tabs: boolean;
            tabWidth: number;
        };
    };

    function printNumber(num: number, options?: Options) {
        console.log(num);
    }
    // @ts-ignore
    printNumber(3, { debug: true, format: { tabs: true, tabWidth: "" } });
    // @ts-expect-error: tabwidth expect a number
    printNumber(3, { debug: true, format: { tabs: true, tabWidth: "3" } });
};
export default test;


export abstract class Dispositives {
    //constructor(protected name: string) { }
    abstract start(event: MouseEvent): void
    abstract stop(): void
    abstract movement(element: HTMLElement, eve: MouseEvent): void
}

export class Melo {
    public error(group: string, message: string) {
        Bragi.log(group, message);
        throw Error(message);
    }
}
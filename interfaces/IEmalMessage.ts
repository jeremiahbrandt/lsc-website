interface emailItem {
    keys<T>(o: string): string
}

export interface IEmailMessage {
    title: string;
    body: emailItem[]
}
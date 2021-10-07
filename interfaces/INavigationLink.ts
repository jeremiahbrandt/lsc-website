export interface INavigationLink {
    name: string,
    url: string,
    dropdown?: INavigationLink[]
}
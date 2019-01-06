export class Article {
  constructor (
    public title: string,
    public text: string,
    public answer: string,
    public _id: string,
    public sectionId: string,
    public dateCreated: Date
  ) {}
}

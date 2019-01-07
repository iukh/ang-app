export class User {
  constructor (
    public name: string,
    public email: string,
    public password: string,
    public _id: string,
    public dateCreated: Date,
    public isAdmin: boolean
  ) {}
}

export class Developer {
  private readonly _firstName: string;
  private readonly _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }
  get fullName(): string {
    return `${this._firstName} ${this._lastName}`;
  }

}

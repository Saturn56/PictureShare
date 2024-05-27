export class User {

  public id: string;
  public nickname: string;
  public isAdmin: boolean;
  public createdAt: Date;
  public jwtToken?: string;

  constructor(id: string, nickname: string, isAdmin: boolean, createdAt: Date, jwtToken?: string) {
    this.id = id;
    this.nickname = nickname;
    this.isAdmin = isAdmin;
    this.createdAt = createdAt;
    this.jwtToken = jwtToken;
  }
}

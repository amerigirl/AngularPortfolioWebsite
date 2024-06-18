export class Tag {
  static readonly ANGULAR = new Tag('Angular', 'red');
  static readonly TYPESCRIPT = new Tag('Typescript', 'blue');
  static readonly HTML = new Tag('HTML', 'orange');
  static readonly JAVASCRIPT = new Tag('Javascript', 'orange');
  static readonly CSHARP = new Tag('C#', 'green');
  static readonly JAVA = new Tag('Java', 'pink');
  static readonly ASPNET = new Tag('ASP.Net', 'purple');
  static readonly PYTHON = new Tag('Python', 'brown');
  static readonly NODEJS = new Tag('Node.JS', 'orange');

  private constructor(
    private readonly key: string,
    public readonly color: string
  ) {}

  toString() {
    return this.key;
  }
}

export class Tag {
  static readonly ANGULAR = new Tag('Angular', 'red');
  static readonly TYPESCRIPT = new Tag('Typescript', ' blue');
  static readonly HTML = new Tag('HTML', 'brown');
  static readonly JAVASCRIPT = new Tag('Javascript', 'green');
  static readonly CSHARP = new Tag('C-Sharp', 'purple');
  static readonly JAVA = new Tag('Java', 'violet');
  static readonly ASPNET = new Tag('ASP.Net', 'teal');
  static readonly PYTHON = new Tag('Python', 'brown');
  static readonly NODEJS = new Tag('Node', 'orange');
  static readonly SQL = new Tag('SQL', 'orange');

  private constructor(
    private readonly key: string,
    public readonly color: string
  ) {}

  toString() {
    //this will help make the keys READABLE when we move it over to html
    return this.key;
  }
}

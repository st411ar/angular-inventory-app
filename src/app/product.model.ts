export class Product {
  constructor(
    public sku: string,
    public name: string,
    public imageUri: string,
    public department: string[],
    public price: number
  ) {}
}

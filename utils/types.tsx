export class Item {
  public name: string
  public image: string
  public slot: number

  constructor(name: string, image: string, slot: number = 0) {
    this.name = name
    this.image = image
    this.slot = slot
  }
}

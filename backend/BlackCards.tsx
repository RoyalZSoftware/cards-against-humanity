import Cards from './Cards';

class BlackCards extends Cards {
  placeholderCount: number;

  constructor() {
    super()
  }

  getPlaceholderCount() {
    const searchTerm = "{}"
    const placeholderCount = this.textstring.split(new RegExp(searchTerm, "gi")).length - 1
    this.placeholderCount = placeholderCount;
  }
}

export default BlackCards;

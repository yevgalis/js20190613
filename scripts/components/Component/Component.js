export class Component {
  on(eventType, callback) {
    this._el.addEventListener(eventType, callback);
  }

  static isNumeric(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  }
}

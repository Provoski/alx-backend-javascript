class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    this.err_msg = 'Class extending Building must override evacuationWarningMessage';
    throw new Error(this.err_msg);
  }
}

export default Building;

class InsertSpace {
  space() {
    return " ";
  }

  insertSpaces(...phrases) {
    return phrases.join(this.space());
  }
}

module.exports = new InsertSpace();

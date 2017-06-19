class Comment {
  constructor(text) {
    this.title = text
  }

  render() {
    return `<li id="single-comment">${this.title}</li>`
  }
}

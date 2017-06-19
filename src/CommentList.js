class CommentList {
  constructor() {
    this.list = []
  }

  addComment(text) {
    this.list.push(new Comment(text))
  }

  renderList() {
    return this.list.map(comment => comment.render())
  }

  render() {
    var list = this.renderList().join("")
    return `<ul>${list}</ul>`
  }
}

$(document).ready(function(){
  // your code here!
  new App()
})
class App {
  constructor() {
    this.submitButton = document.getElementById('submit-comment')
    this.commentText = document.getElementById('comment-text')
    this.commentContainer = document.getElementById('comment-list')
    this.commentList = new CommentList()
    this.submitButton.addEventListener('click', (e) => this.submitComment(e))
    // this.commentContainer.addEventListener('click', (e) => this.removeComment(e))
  }

  submitComment(e) {
    e.preventDefault()
    this.commentList.addComment(this.commentText.value)
    this.commentText.value = ''
    this.render()
  }

  // removeComment(e) {
  //   var target = e.target
  //   if (target.id === "single-comment") {
  //     target.style.visibility = 'hidden'
  //   }
  // }

  render() {
    this.commentContainer.innerHTML = this.commentList.render()
  }
}

export const scrollToPosition = (position) => {
  this.refs.scrollView.scrollTo({
    x: position.x,
    y: position.y,
    animated: false,
  })
}
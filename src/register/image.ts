import Quill from 'quill'
const Image = Quill.import('formats/image')
class MyImage extends Image {
  static create(value: string) {
    const node = super.create(value)
    node.setAttribute('style', 'max-width: 100%')
    return node
  }
}

Quill.register('formats/image', MyImage)

import Quill from 'quill'
const Image = Quill.import('formats/image')
class selfImage extends Image {
  static create(value: string) {
    const node = super.create(value)
    node.setAttribute('style', 'max-width: 100%')
    return node
  }
}

selfImage.blotName = 'self-image'

Quill.register('formats/selfImage', selfImage)
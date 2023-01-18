import Quill from 'quill'
const Link = Quill.import('formats/link')
class MyLink extends Link {
  static create(value: string) {
    const node = super.create(value)
    node.setAttribute('style', 'text-decoration: underline; color: #06c')
    return node
  }
}

Quill.register('formats/link', MyLink)

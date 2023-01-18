import Quill from 'quill'
const Block = Quill.import('blots/block')

class Header extends Block {
  static create(value: any) {
    // return super.create()
    // 添加样式
    const node = super.create(value)
    const size = ['', '2em', '1.5em', '1.17em', '1em', ' 0.83em', '0.67em']
    node.setAttribute('style', `font-weight: bold;font-size:${size[value]}`)
    return node
  }

  static formats(domNode: HTMLElement) {
    return this.tagName.indexOf(domNode.tagName) + 1
  }
}
Header.blotName = 'header'
Header.tagName = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6']

Quill.register('formats/header', Header, true)

import Quill from 'quill'
const Inline = Quill.import('blots/inline')

class MyScript extends Inline {
  static create(value: string) {
    if (value === 'super') {
      const node = document.createElement('sup')
      node.setAttribute('style', 'vertical-align: super;font-size: smaller;')
      return node
    } else if (value === 'sub') {
      const node = document.createElement('sub')
      node.setAttribute('style', 'vertical-align: sub;font-size: smaller;')
      return node
    } else {
      return super.create(value)
    }
  }

  static formats(domNode: HTMLElement) {
    if (domNode.tagName === 'SUB') return 'sub'
    if (domNode.tagName === 'SUP') return 'super'
    return undefined
  }
}
MyScript.blotName = 'script'
MyScript.tagName = ['SUB', 'SUP']

Quill.register('formats/script', MyScript)

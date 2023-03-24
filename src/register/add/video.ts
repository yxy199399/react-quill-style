import Quill from "quill"
const Block = Quill.import('blots/block')
class selfVideo extends Block {
  static create(value: string) {
    const node = super.create(value)
    node.src = value;
    node.setAttribute('style', 'max-width: 100%')
    node.setAttribute('controls', true)
    return node
  }

  static formats(node: HTMLElement) {
    return node.getAttribute('src')
  }

  static value(node: HTMLElement) {
    return node.getAttribute('src')
  }

  optimize(context: any) {
    super.optimize(context)
    if (this.domNode.tagName !== this.statics.tagName) {
      this.replaceWith(this.statics.blotName)
    }
  }
}

selfVideo.blotName = 'self-video'
selfVideo.tagName = 'video'

Quill.register('formats/selfVideo', selfVideo)


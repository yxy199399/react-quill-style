import Quill from 'quill'
const Vedio = Quill.import('formats/video')
class MyVedio extends Vedio {
  static create(value: string) {
    const node = super.create(value)
    node.setAttribute('style', 'max-width: 100%;; display: block')
    return node
  }
}

Quill.register('formats/video', MyVedio)

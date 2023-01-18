import Quill from 'quill'
const List = Quill.import('formats/list')
class MyList extends List {
  static create(value: string) {
    // 这里需要注意，super.create(value)调用的是父类的方式
    const node = super.create(value)
    const type = value === 'ordered' ? 'decimal' : 'disc'
    node.setAttribute('style', `padding-left: 1.5em;list-style:${type}`)
    return node
  }
}

Quill.register('formats/list', MyList)

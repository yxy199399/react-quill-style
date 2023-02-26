import Quill from 'quill'
const Parchment = Quill.import('parchment')
class IndentStyleAttributor extends Parchment.Attributor.Style {
  constructor(attrName: string, keyName: string, options: any) {
    super(attrName, keyName, options)
  }

  value(node: HTMLElement) {
    // return parseInt(super.value(node)) || undefined
    const value = super.value(node)
    if (!value) return 0
    const valueFormat = parseInt(value)
    return valueFormat
  }

  add(node: HTMLElement, value: string | number) {
    if (value === '+1' || value === '-1') {
      const indent = this.value(node) || 0
      value = value === '+1' ? indent + 1 : indent - 1
    }
    if (value === 0) {
      node.removeAttribute('style')
      return true
    } else {
      return super.add(node, Number(value) * 1 + 'em')
    }
  }

  canAdd(node: HTMLElement, value: string) {
    return super.canAdd(node, value) || super.canAdd(node, parseInt(value))
  }
}
const IndentStyle = new IndentStyleAttributor('indention', 'text-indent', {
  scope: Parchment.Scope.BLOCK,
  whitelist: [1, 2, 3, 4, 5, 6, 7, 8].map((item) => item * 1 + 'em'),
})

Quill.register('formats/indention', IndentStyle, true)

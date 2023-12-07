import './add'
import './imageResize'
import './imageDrop'
import './lineStyle'
import './bold'
import './italic'
import './underline'
import './strike'
import './blockquote'
import './code'
import './header'
import './list'
import './script'
import './indent'
import './direction'
import './link'
import './image'
import './video'
import './font'

// 说明
// 在手动创建/初始值时, 都会触发 create 函数
//  static create(value?: any): Node;

// 从 domNode 上获取想要的数据
//  static formats(domNode: Node);

// static formats 返回的数据会被传递给 format
// 此函数的作用是将数据设置到 domNode
// 如果 name 是 quill 里的格式走默认逻辑是会被正确使用的
// 如果是特殊的name, 不处理就不会起效
//  format(format: name, value: any);

// 返回一个值, 通常在初始化的时候传给 static create
// 通常实现一个自定义格式, value 和 format 使用一个即可达到目标
//  value(): any;


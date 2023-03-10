import Quill from "quill";

const Embed = Quill.import("blots/embed");

class MentionBlot extends Embed {
  hoverHandler: any;

  constructor(scroll: any, node: any) {
    super(scroll, node);
    this.clickHandler = null;
    this.hoverHandler = null;
    this.mounted = false;
  }

  static create(data : any) {
    const node = super.create();
    const denotationChar = document.createElement("span");
    denotationChar.className = "ql-mention-denotation-char";
    denotationChar.innerHTML = data.denotationChar;
    node.appendChild(denotationChar);
    console.log(node)
    node.innerHTML += data.value;
    console.log(node)
    return MentionBlot.setDataValues(node, data);
  }

  static setDataValues(element: any, data: any) {
    const domNode = element;
    Object.keys(data).forEach(key => {
      domNode.dataset[key] = data[key];
    });
    return domNode;
  }

  static value(domNode: any) {
    return domNode.dataset;
  }

  attach() {
    super.attach();
  
    if (!this.mounted) {
      this.mounted = true;
      this.clickHandler = this.getClickHandler();
      this.hoverHandler = this.getHoverHandler();

      this.domNode.addEventListener("click", this.clickHandler, false);
      this.domNode.addEventListener("mouseenter", this.hoverHandler, false);
    }
  }

  detach() {
    super.detach();
    this.mounted = false;
    if (this.clickHandler) {
      this.domNode.removeEventListener("click", this.clickHandler);
      this.clickHandler = null;
    }
  }

  getClickHandler() {
    return (e: any) => {
      const event = this.buildEvent("mention-clicked", e);
      window.dispatchEvent(event);
      e.preventDefault();
    };
  }

  getHoverHandler() {
    return (e: any) => {
      const event = this.buildEvent('mention-hovered', e);
      window.dispatchEvent(event);
      e.preventDefault();
    }
  }

  buildEvent(name: any, e: any) {
      const event: any = new Event(name, {
        bubbles: true,
        cancelable: true
      });
      event.value = Object.assign({}, this.domNode.dataset);
      event.event = e;
      return event;
  }

  // hoverHandler;
}

MentionBlot.blotName = "mention";
MentionBlot.tagName = "span";
MentionBlot.className = "mention";

Quill.register(MentionBlot);

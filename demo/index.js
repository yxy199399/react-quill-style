/* global React */
/* global ReactQuill */
'use strict';

if (typeof React !== 'object') {
  alert('React not found. Did you run "npm install"?');
}

if (typeof ReactQuill !== 'function') {
  alert('ReactQuill not found. Did you run "make build"?')
}

var EMPTY_DELTA = {ops: []};

class Editor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      theme: 'snow',
      enabled: true,
      readOnly: false,
      value: EMPTY_DELTA,
      events: []
    };
  }

  formatRange(range) {
    return range
      ? [range.index, range.index + range.length].join(',')
      : 'none';
  }

  onEditorChange = (value, delta, source, editor) => {
    this.setState({
      value: editor.getContents(),
      events: [`[${source}] text-change`, ...this.state.events],
    });
  }

  onEditorChangeSelection = (range, source) => {
    this.setState({
      selection: range,
      events: [
        `[${source}] selection-change(${this.formatRange(this.state.selection)} -> ${this.formatRange(range)})`,
        ...this.state.events,
      ]
    });
  }

  onEditorFocus = (range, source) => {
    this.setState({
      events: [
        `[${source}] focus(${this.formatRange(range)})`
      ].concat(this.state.events)
    });
  }

  onEditorBlur = (previousRange, source) => {
    this.setState({
      events: [
        `[${source}] blur(${this.formatRange(previousRange)})`
      ].concat(this.state.events)
    });
  }

  onToggle = () => {
    this.setState({ enabled: !this.state.enabled });
  }

  onToggleReadOnly = () => {
    this.setState({ readOnly: !this.state.readOnly });
  }

  onSetContents = () => {
    this.setState({ value: 'This is some <b>fine</b> example content' });
  }

  render() {
    return (
      <div>
        {this.renderToolbar()}
        <hr/>
        {this.renderSidebar()}
        {this.state.enabled && <ReactQuill
          theme={this.state.theme}
          value={this.state.value}
          readOnly={this.state.readOnly}
          onChange={this.onEditorChange}
          onChangeSelection={this.onEditorChangeSelection}
          onFocus={this.onEditorFocus}
          onBlur={this.onEditorBlur}
          modules={{
            toolbar: {
              container: [
                ['bold', 'italic', 'underline', 'strike', 'code'], 
                ['blockquote', 'code-block'],
                [{ 'header': 1 }, { 'header': 2 }],
                [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                [{ 'script': 'sub'}, { 'script': 'super' }],
                [{ 'indent': '-1'}, { 'indent': '+1' }], 
                [{ 'direction': 'rtl' }], 
                [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

                [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
                [{ 'font': ['SimSun', 'SimHei', 'Microsoft-YaHei', 'KaiTi', 'FangSong', 'Arial'] }],
                [{ 'align': [] }],
                // 自定义操作添加self-便于查找和操作
                [{ 'self-indention': '-1'}, { 'self-indention': '+1' }], 
                [{'self-lineHeight': [
                  false,
                  '1',
                  '1.1',
                  '1.2',
                  '1.3',
                  '1.5',
                  '1.6',
                  '1.7',
                  '1.8',
                  '1.9',
                  '2',
                  '2.1',
                  '2.2',
                  '2.3',
                  '2.4',
                  '2.5',
                  '2.6',
                  '2.7',
                  '2.8',
                  '2.9',
                  '3'
                ]}],
                ['image', 'video', 'formula'],
                ['clean']                      
              ]
            }
          }}
        />}
      </div>
    );
  }

  renderToolbar() {
    var state = this.state;
    var enabled = state.enabled;
    var readOnly = state.readOnly;
    var selection = this.formatRange(state.selection);
    return (
      <div>
        <button onClick={this.onToggle}>
          {enabled? 'Disable' : 'Enable'}
        </button>
        <button onClick={this.onToggleReadOnly}>
          Set {readOnly? 'read/Write' : 'read-only'}
        </button>
        <button onClick={this.onSetContents}>
          Fill contents programmatically
        </button>
        <button disabled={true}>
          Selection: ({selection})
        </button>
      </div>
    );
  }

  renderSidebar() {
    return (
      <div style={{ overflow:'hidden', float:'right' }}>
        <textarea
          style={{ display:'block', width:300, height:300 }}
          value={JSON.stringify(this.state.value, null, 2)}
          readOnly={true}
        />
        <textarea
          style={{ display:'block', width:300, height:300 }}
          value={this.state.events.join('\n')}
          readOnly={true}
        />
      </div>
    );
  }

}

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
  <React.StrictMode>
    <Editor />
  </React.StrictMode>
);

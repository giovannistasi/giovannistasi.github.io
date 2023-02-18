import { historyField } from '@codemirror/commands';
import { markdown } from '@codemirror/lang-markdown';
import { type ViewUpdate, EditorView } from '@codemirror/view';
import ReactCodeMirror from '@uiw/react-codemirror';

import { sessionStorage } from '@/lib/sessionStorage';
import { formatEndline } from '@/lib/string';

// When custom fields should be serialized, you can pass them in as an object mapping property names to fields.
// See [toJSON](https://codemirror.net/docs/ref/#state.EditorState.toJSON) documentation for more details
const stateFields = { history: historyField };

export function Editor({ onChange }: { onChange: (doc: string) => void }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const serializedState = sessionStorage.getItem('editorState') as any;
  const value = (sessionStorage.getItem('editorValue') ?? '') as string;

  return (
    <ReactCodeMirror
      value={value}
      initialState={
        serializedState
          ? {
              json: JSON.parse((serializedState ?? '') as string),
              fields: stateFields,
            }
          : undefined
      }
      onChange={(value: string, viewUpdate: ViewUpdate) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const state = (viewUpdate as any).state.toJSON(stateFields);
        sessionStorage.setItem('editorState', JSON.stringify(state));
        sessionStorage.setItem('editorValue', value);
        onChange(formatEndline(value));
      }}
      extensions={[markdown({ codeLanguages: [] }), EditorView.lineWrapping]}
      height='100%'
      style={{ height: '100%' }}
    />
  );
}

import Playground from '@agney/playground';
/* Why is there a tabs import? https://github.com/agneym/playground#why-is-there-a-reacttabs-import*/
import '@reach/tabs/styles.css';
import { useTheme } from 'next-themes';

const WebPlayground = ({
  markup = '',
  css = '',
  javascript = '',
  defaultEditorTab = 'markup',
}) => {
  const snippet = { markup, css, javascript };
  const { theme } = useTheme();
  return (
    <Playground
      id="example"
      initialSnippet={snippet}
      defaultEditorTab={defaultEditorTab}
      mode={theme}
    />
  );
};

export default WebPlayground;

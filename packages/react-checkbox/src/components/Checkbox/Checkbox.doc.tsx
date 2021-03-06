import * as React from 'react';
import { CheckboxBasicExample } from './examples/Checkbox.Basic.Example';
import { CheckboxIndeterminateExample } from './examples/Checkbox.Indeterminate.Example';
import { CheckboxOtherExample } from './examples/Checkbox.Other.Example';

import { IDocPageProps } from 'office-ui-fabric-react/lib/common/DocPage.types';

const CheckboxBasicExampleCode = require('!raw-loader!@fluentui/react-checkbox/src/components/Checkbox/examples/Checkbox.Basic.Example.tsx') as string;
const CheckboxOtherExampleCode = require('!raw-loader!@fluentui/react-checkbox/src/components/Checkbox/examples/Checkbox.Other.Example.tsx') as string;
const CheckboxIndeterminateExampleCode = require('!raw-loader!@fluentui/react-checkbox/src/components/Checkbox/examples/Checkbox.Indeterminate.Example.tsx') as string;

export const CheckboxPageProps: IDocPageProps = {
  title: 'Checkbox',
  componentName: 'Checkbox',
  componentUrl:
    'https://github.com/microsoft/fluentui/tree/master/packages/@fluentui/react-checkbox/src/components/Checkbox',
  examples: [
    {
      title: 'Basic Checkboxes',
      code: CheckboxBasicExampleCode,
      view: <CheckboxBasicExample />,
    },
    {
      title: 'Other Implementation Examples',
      code: CheckboxOtherExampleCode,
      view: <CheckboxOtherExample />,
    },
    {
      title: 'Indeterminate Checkboxes',
      code: CheckboxIndeterminateExampleCode,
      view: <CheckboxIndeterminateExample />,
    },
  ],
  overview: require<string>('!raw-loader!@fluentui/react-checkbox/src/components/Checkbox/docs/CheckboxOverview.md'),
  bestPractices: '',
  dos: require<string>('!raw-loader!@fluentui/react-checkbox/src/components/Checkbox/docs/CheckboxDos.md'),
  donts: require<string>('!raw-loader!@fluentui/react-checkbox/src/components/Checkbox/docs/CheckboxDonts.md'),
  isHeaderVisible: true,
  isFeedbackVisible: true,
};

import {
  itSupportsClassName,
  itSupportsMargins,
  itSupportsOthers,
  itSupportsRef,
  itSupportsStyle,
  itSupportsStylesApi,
} from '@mantine/tests';
import { TransferList, TransferListProps } from './TransferList';
import { TransferList as TransferListStylesApi } from './styles.api';

const defaultProps: Partial<TransferListProps> = {
  onChange: () => {},
  titles: ['test-1', 'test-2'],
  value: [
    [
      { value: 'react', label: 'React' },
      { value: 'ng', label: 'Angular' },
      { value: 'next', label: 'Next.js' },
    ],
    [
      { value: 'sv', label: 'Svelte' },
      { value: 'rw', label: 'Redwood' },
    ],
  ],
};

describe('@mantine/core/TransferList', () => {
  itSupportsClassName(TransferList, defaultProps);
  itSupportsMargins(TransferList, defaultProps);
  itSupportsOthers(TransferList, defaultProps);
  itSupportsStyle(TransferList, defaultProps);
  itSupportsRef(TransferList, defaultProps, HTMLDivElement);
  itSupportsStylesApi(
    TransferList,
    defaultProps,
    Object.keys(TransferListStylesApi).filter((key) => key !== 'transferListItemHovered'),
    'TransferList'
  );

  it('has correct displayName', () => {
    expect(TransferList.displayName).toEqual('@mantine/core/TransferList');
  });
});

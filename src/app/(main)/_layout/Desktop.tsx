'use client';

import { useTheme } from 'antd-style';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { usePlatform } from '@/hooks/usePlatform';

import { LayoutProps } from './type';

const Layout = memo<LayoutProps>(({ children, nav }) => {
  const { isPWA } = usePlatform();
  const theme = useTheme();

  return (
    <Flexbox
      height={'100%'}
      horizontal
      style={{
        borderTop: isPWA ? `1px solid ${theme.colorBorder}` : undefined,
        position: 'relative',
      }}
      width={'100%'}
    >
      {nav}
      {children}
    </Flexbox>
  );
});

Layout.displayName = 'DesktopMainLayout';

export default Layout;

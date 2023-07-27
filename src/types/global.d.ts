declare module '*.scss';
declare module '*.png';
declare module '*.jpg';

declare module '*.svg' {
  import * as React from 'react';

  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export { ReactComponent };
}

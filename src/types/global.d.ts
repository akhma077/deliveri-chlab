declare module '*.scss';
declare module '*.png';
declare module '*.jpg';

declare module '*.svg' {
  import { ReactComponent } from 'react';
  const content: ReactComponent;
  export default content;
}

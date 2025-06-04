// src/images.d.ts
declare module '*.jpg' {
    const value: string;
    export default value;
}

declare module '*.svg' {
    import * as React from 'react';
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}

declare module '*.png' {
    const value: string;
    export default value;
}

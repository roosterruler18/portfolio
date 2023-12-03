// Container.tsx
import React, { ReactNode } from 'react';

type ContainerProps = {
    children?: ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
    return <div className="container">{children}</div>;
};

export default Container;

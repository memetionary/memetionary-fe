'use client';

import { createPortal } from 'react-dom';

const PORTAL_TYPES = {
  MODAL: 'modal',
  TOAST: 'toast',
} as const;

type PortalType = (typeof PORTAL_TYPES)[keyof typeof PORTAL_TYPES];

export const PortalProvider = () => (
  <>
    {Object.values(PORTAL_TYPES).map((id) => (
      <div id={id} key={id} />
    ))}
  </>
);

interface PortalProps {
  type: PortalType;
  children: React.ReactNode;
}

export const Portal = ({ type, children }: PortalProps) => {
  const portalElement = document.getElementById(type) as HTMLDivElement;
  return createPortal(children, portalElement);
};

import * as React from 'react';
import { MouseEventHandler } from 'react';

export interface IModalProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  headerLabel: string;
  confirmLabel?: string;
  showFooter?: boolean;
  children: React.ReactNode;
  handleHide?: () => void;
  handleConfirm?: MouseEventHandler<HTMLButtonElement>;
}

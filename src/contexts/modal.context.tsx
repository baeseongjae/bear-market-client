"use client";

import React, { createContext, useContext, useState } from "react";

type ModalContextValue = {
  modalElement: React.ReactElement | null;
  open: (modalElement: React.ReactElement) => void;
  close: () => void;
};

const initialValue: ModalContextValue = {
  modalElement: null,
  open: () => {},
  close: () => {},
};

const ModalContext = createContext(initialValue);

export const useModal = () => useContext(ModalContext);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [modalElement, setModalElement] =
    useState<ModalContextValue["modalElement"]>(null);
  const open: ModalContextValue["open"] = (modalElement) => {
    setModalElement(modalElement);
  };
  const close: ModalContextValue["close"] = () => setModalElement(null);

  const value = {
    modalElement,
    open,
    close,
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
      {modalElement}
    </ModalContext.Provider>
  );
}

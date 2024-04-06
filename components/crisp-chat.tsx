"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("31ca67b1-3da7-4acb-8385-ce6e5cb1b8fd");
  }, []);

  return null;
};
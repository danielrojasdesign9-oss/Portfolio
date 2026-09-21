"use client";

import { Button, ButtonKind } from "@carbon/react";
import { ReactNode } from "react";

interface CarbonButtonProps {
  children: ReactNode;
  onClick?: () => void;
  kind?: ButtonKind;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export default function CarbonButton({
  children,
  onClick,
  kind = "primary",
  size = "md",
  disabled = false,
  type = "button",
  className = "",
}: CarbonButtonProps) {
  return (
    <Button
      kind={kind}
      size={size}
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={className}
    >
      {children}
    </Button>
  );
}

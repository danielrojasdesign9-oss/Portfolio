"use client";

import type { ReactNode } from "react";
import { Button } from "@carbon/react";
import {
  ArrowRight,
  ArrowUpRight,
  Email,
  LogoLinkedin,
  Chat,
  Download,
} from "@carbon/icons-react";

const ICONS: Record<string, any> = {
  ArrowRight,
  ArrowUpRight,
  Email,
  LogoLinkedin,
  Chat,
  Download,
};

interface Props {
  href: string;
  icon?: keyof typeof ICONS | string;
  kind?: "primary" | "secondary" | "tertiary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  target?: string;
  rel?: string;
  children: ReactNode;
}

export default function CarbonLinkButton({
  href,
  icon,
  kind = "primary",
  size = "lg",
  className,
  target,
  rel,
  children,
}: Props) {
  return (
    <Button
      href={href}
      kind={kind}
      size={size}
      className={className}
      target={target}
      rel={rel}
      renderIcon={icon ? ICONS[icon] : undefined}
    >
      {children}
    </Button>
  );
}

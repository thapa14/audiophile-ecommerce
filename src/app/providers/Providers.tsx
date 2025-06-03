import type { ReactNode } from "react";

type ProvidersCheck = {
  children: ReactNode;
};

export default function Providers({ children }: ProvidersCheck) {
  return <>{children}</>;
}

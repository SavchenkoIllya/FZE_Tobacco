import { ReactNode } from "react";

export const ProductsListWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className={" grid grid-cols-2 gap-1 md:grid-cols-4 xl:grid-cols-5"}>
      {children}
    </div>
  );
};

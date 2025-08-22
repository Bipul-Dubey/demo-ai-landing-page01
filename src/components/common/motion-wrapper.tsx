import type { ComponentPropsWithoutRef, ElementType } from "react";
import { motion, MotionProps } from "framer-motion";

type MotionWrapperProps<T extends ElementType> = {
  as?: T;
} & ComponentPropsWithoutRef<T> &
  MotionProps;

export const Motion = <T extends ElementType = "div">({
  as,
  ...rest
}: MotionWrapperProps<T>) => {
  const Component = (
    as ? (motion as any)[as] : motion.div
  ) as React.ElementType;
  return <Component {...rest} />;
};

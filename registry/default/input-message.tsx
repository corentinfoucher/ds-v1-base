"use client";

import {
  forwardRef,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type HTMLAttributes,
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactNode,
  type TextareaHTMLAttributes,
} from "react";
import { cn } from "@/lib/utils";
import { fontWeights } from "@/lib/font-weight";
import { useShape } from "@/lib/shape-context";
import { useIcon } from "@/lib/icon-context";
import { surfaceClasses } from "@/lib/surface-classes";
import { SurfaceProvider } from "@/lib/surface-context";
import { Button } from "@/registry/radix/button";

const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

interface InputMessageProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** Controlled textarea value. */
  value: string;
  /** Called with the new value on every textarea change. */
  onValueChange: (value: string) => void;
  /** Fired when the user submits (Enter or send button). Receives the trimmed value. */
  onSend?: (value: string) => void;
  /** Placeholder text shown when the value is empty. */
  placeholder?: string;
  /** Content rendered in the bottom-left action area. */
  leftSlot?: ReactNode;
  /** Content rendered in the bottom-right action area, before the send button. */
  rightSlot?: ReactNode;
  /** Disables the textarea and send button. */
  disabled?: boolean;
  /** Minimum visible rows before the textarea grows. */
  minRows?: number;
  /** Maximum visible rows before the textarea starts to scroll. */
  maxRows?: number;
  /** Accessible label for the send button. */
  sendLabel?: string;
  /** Extra props forwarded to the underlying textarea. */
  textareaProps?: Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    "value" | "onChange" | "onKeyDown" | "disabled" | "placeholder"
  >;
}

const InputMessage = forwardRef<HTMLDivElement, InputMessageProps>(
  (
    {
      value,
      onValueChange,
      onSend,
      placeholder = "Ask me anything…",
      leftSlot,
      rightSlot,
      disabled,
      minRows = 1,
      maxRows = 8,
      sendLabel = "Send",
      textareaProps,
      className,
      ...props
    },
    ref
  ) => {
    const shape = useShape();
    const ArrowUpIcon = useIcon("arrow-up");

    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [focusVisible, setFocusVisible] = useState(false);

    useIsoLayoutEffect(() => {
      const el = textareaRef.current;
      if (!el) return;
      el.style.height = "auto";
      const computed = getComputedStyle(el);
      const lineHeight = parseFloat(computed.lineHeight);
      if (Number.isNaN(lineHeight)) return;
      const min = lineHeight * minRows;
      const max = lineHeight * maxRows;
      const next = Math.min(Math.max(el.scrollHeight, min), max);
      el.style.height = `${next}px`;
      el.style.overflowY = el.scrollHeight > max ? "auto" : "hidden";
    }, [value, minRows, maxRows]);

    const trimmed = value.trim();
    const canSend = !disabled && trimmed.length > 0;

    const handleSend = useCallback(() => {
      if (!canSend) return;
      onSend?.(trimmed);
    }, [canSend, onSend, trimmed]);

    const handleKeyDown = useCallback(
      (e: ReactKeyboardEvent<HTMLTextAreaElement>) => {
        // Skip during IME composition to avoid sending mid-conversion.
        if (e.nativeEvent.isComposing) return;
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          handleSend();
        }
      },
      [handleSend]
    );

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col gap-2 px-3 py-3 border transition-colors duration-80",
          surfaceClasses(2, 2),
          shape.container,
          focusVisible ? "border-[#6B97FF]" : "border-border",
          disabled && "opacity-50 pointer-events-none",
          className
        )}
        {...props}
      >
        <SurfaceProvider value={2}>
          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => onValueChange(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={(e) => {
              if (e.target.matches(":focus-visible")) setFocusVisible(true);
            }}
            onBlur={() => setFocusVisible(false)}
            placeholder={placeholder}
            disabled={disabled}
            rows={minRows}
            aria-label={textareaProps?.["aria-label"] ?? "Message"}
            className={cn(
              "w-full resize-none bg-transparent outline-none",
              "text-[14px] text-foreground placeholder:text-muted-foreground",
              "px-1 pt-0.5"
            )}
            style={{ fontVariationSettings: fontWeights.normal }}
            {...textareaProps}
          />
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 min-w-0">{leftSlot}</div>
            <div className="flex items-center gap-1.5 shrink-0">
              {rightSlot}
              <Button
                type="button"
                variant="primary"
                size="icon"
                onClick={handleSend}
                disabled={!canSend}
                aria-label={sendLabel}
              >
                <ArrowUpIcon />
              </Button>
            </div>
          </div>
        </SurfaceProvider>
      </div>
    );
  }
);

InputMessage.displayName = "InputMessage";

export { InputMessage };
export type { InputMessageProps };
export default InputMessage;

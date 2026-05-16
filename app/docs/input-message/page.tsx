"use client";

import { useState } from "react";
import { InputMessage } from "@/registry/default/input-message";
import { Button } from "@/registry/radix/button";
import { useIcon } from "@/lib/icon-context";
import { fontWeights } from "@/registry/default/lib/font-weight";
import { ComponentPreview } from "@/lib/docs/ComponentPreview";
import { PropsTable, type PropDef } from "@/lib/docs/PropsTable";
import { DocPage, DocSection } from "@/lib/docs/DocPage";

const basicCode = `import { useState } from "react";
import { InputMessage } from "./components";

const [value, setValue] = useState("");

<InputMessage
  value={value}
  onValueChange={setValue}
  onSend={(text) => console.log("send:", text)}
/>`;

const actionsCode = `import { useState } from "react";
import { InputMessage } from "./components";
import { Button } from "./components";
import { useIcon } from "@/lib/icon-context";

const [value, setValue] = useState("");
const PlusIcon = useIcon("plus");
const ChevronDownIcon = useIcon("chevron-down");

<InputMessage
  value={value}
  onValueChange={setValue}
  onSend={(text) => console.log(text)}
  leftSlot={
    <>
      <Button variant="ghost" size="icon-sm" aria-label="Attach">
        <PlusIcon />
      </Button>
      <div className="flex items-center gap-1 text-[12px] text-muted-foreground">
        <div className="flex -space-x-2">
          <span className="size-5 rounded-full bg-indigo-500 ring-2 ring-background" />
          <span className="size-5 rounded-full bg-foreground ring-2 ring-background" />
        </div>
        <span>+49</span>
      </div>
    </>
  }
  rightSlot={
    <Button variant="ghost" size="sm" trailingIcon={ChevronDownIcon}>
      Sonnet 4.6
    </Button>
  }
/>`;

const leftOnlyCode = `import { useState } from "react";
import { InputMessage } from "./components";
import { Button } from "./components";
import { useIcon } from "@/lib/icon-context";

const [value, setValue] = useState("");
const PlusIcon = useIcon("plus");

<InputMessage
  value={value}
  onValueChange={setValue}
  leftSlot={
    <Button variant="ghost" size="icon-sm" aria-label="Attach">
      <PlusIcon />
    </Button>
  }
/>`;

const rightOnlyCode = `import { useState } from "react";
import { InputMessage } from "./components";
import { Button } from "./components";
import { useIcon } from "@/lib/icon-context";

const [value, setValue] = useState("");
const ChevronDownIcon = useIcon("chevron-down");

<InputMessage
  value={value}
  onValueChange={setValue}
  rightSlot={
    <Button variant="ghost" size="sm" trailingIcon={ChevronDownIcon}>
      Sonnet 4.6
    </Button>
  }
/>`;

const sendHandlerCode = `import { useState } from "react";
import { InputMessage } from "./components";

const [value, setValue] = useState("");
const [messages, setMessages] = useState<string[]>([]);

<InputMessage
  value={value}
  onValueChange={setValue}
  onSend={(text) => {
    setMessages((prev) => [...prev, text]);
    setValue("");
  }}
/>

<ul>
  {messages.map((m, i) => <li key={i}>{m}</li>)}
</ul>`;

const disabledCode = `import { InputMessage } from "./components";

<InputMessage
  value="This composer is disabled"
  onValueChange={() => {}}
  disabled
/>`;

const inputMessageProps: PropDef[] = [
  { name: "value", type: "string", description: "Controlled textarea value." },
  { name: "onValueChange", type: "(value: string) => void", description: "Called with the new value on every textarea change." },
  { name: "onSend", type: "(value: string) => void", description: "Fires on Enter (without Shift) or send-button click with the trimmed value. Skipped when empty." },
  { name: "placeholder", type: "string", default: '"Ask me anything…"', description: "Placeholder text shown when the value is empty." },
  { name: "leftSlot", type: "ReactNode", description: "Content rendered in the bottom-left action area." },
  { name: "rightSlot", type: "ReactNode", description: "Content rendered in the bottom-right action area, before the built-in send button." },
  { name: "disabled", type: "boolean", default: "false", description: "Disables the textarea and send button." },
  { name: "minRows", type: "number", default: "1", description: "Minimum visible rows before the textarea grows." },
  { name: "maxRows", type: "number", default: "8", description: "Maximum visible rows before the textarea starts to scroll." },
  { name: "sendLabel", type: "string", default: '"Send"', description: "Accessible label for the send button." },
  { name: "textareaProps", type: "TextareaHTMLAttributes", description: "Extra props forwarded to the underlying textarea (value, onChange, onKeyDown, disabled and placeholder are controlled by the component)." },
];

export default function InputMessageDoc() {
  const [basicValue, setBasicValue] = useState("");
  const [actionsValue, setActionsValue] = useState("");
  const [leftValue, setLeftValue] = useState("");
  const [rightValue, setRightValue] = useState("");
  const [handlerValue, setHandlerValue] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  const PlusIcon = useIcon("plus");
  const ChevronDownIcon = useIcon("chevron-down");

  return (
    <DocPage
      title="InputMessage"
      slug="input-message"
      description="Chat-style message composer with an auto-resizing textarea, flexible left/right action slots, and a built-in send button on a Surface-2 substrate."
    >
      <DocSection title="Basic">
        <ComponentPreview code={basicCode}>
          <div className="w-full max-w-xl">
            <InputMessage
              value={basicValue}
              onValueChange={setBasicValue}
              onSend={() => setBasicValue("")}
            />
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="With Left and Right Actions">
        <ComponentPreview code={actionsCode}>
          <div className="w-full max-w-xl">
            <InputMessage
              value={actionsValue}
              onValueChange={setActionsValue}
              onSend={() => setActionsValue("")}
              leftSlot={
                <>
                  <Button variant="ghost" size="icon-sm" aria-label="Attach">
                    <PlusIcon />
                  </Button>
                  <div className="flex items-center gap-1 text-[12px] text-muted-foreground">
                    <div className="flex -space-x-2">
                      <span className="size-5 rounded-full bg-indigo-500 ring-2 ring-background" />
                      <span className="size-5 rounded-full bg-foreground ring-2 ring-background" />
                    </div>
                    <span style={{ fontVariationSettings: fontWeights.medium }}>+49</span>
                  </div>
                </>
              }
              rightSlot={
                <Button variant="ghost" size="sm" trailingIcon={ChevronDownIcon}>
                  Sonnet 4.6
                </Button>
              }
            />
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="Left Slot Only">
        <ComponentPreview code={leftOnlyCode}>
          <div className="w-full max-w-xl">
            <InputMessage
              value={leftValue}
              onValueChange={setLeftValue}
              onSend={() => setLeftValue("")}
              leftSlot={
                <Button variant="ghost" size="icon-sm" aria-label="Attach">
                  <PlusIcon />
                </Button>
              }
            />
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="Right Slot Only">
        <ComponentPreview code={rightOnlyCode}>
          <div className="w-full max-w-xl">
            <InputMessage
              value={rightValue}
              onValueChange={setRightValue}
              onSend={() => setRightValue("")}
              rightSlot={
                <Button variant="ghost" size="sm" trailingIcon={ChevronDownIcon}>
                  Sonnet 4.6
                </Button>
              }
            />
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="Send Handler">
        <ComponentPreview code={sendHandlerCode}>
          <div className="w-full max-w-xl flex flex-col gap-3">
            <InputMessage
              value={handlerValue}
              onValueChange={setHandlerValue}
              onSend={(text) => {
                setMessages((prev) => [...prev, text]);
                setHandlerValue("");
              }}
              placeholder="Press Enter to send. Shift+Enter for newline."
            />
            {messages.length > 0 && (
              <ul className="flex flex-col gap-1 text-[13px] text-muted-foreground pl-1">
                {messages.map((m, i) => (
                  <li key={i} className="truncate">
                    <span className="text-foreground" style={{ fontVariationSettings: fontWeights.medium }}>
                      Sent:
                    </span>{" "}
                    {m}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="Disabled">
        <ComponentPreview code={disabledCode}>
          <div className="w-full max-w-xl">
            <InputMessage
              value="This composer is disabled"
              onValueChange={() => {}}
              disabled
            />
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="API Reference">
        <PropsTable props={inputMessageProps} />
      </DocSection>
    </DocPage>
  );
}

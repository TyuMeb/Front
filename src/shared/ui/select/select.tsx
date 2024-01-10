import React, { ReactNode, useState } from "react";
import * as RadixSelect from "@radix-ui/react-select";
import { cn } from "@src/shared/lib/cn";
import { Icon } from "@src/components/icon";
import styles from "./select.module.scss";
import { useElementWidth } from "@src/shared/lib/hooks/use-element-width";
import { useFallbackRef } from "@src/shared/lib/hooks/use-fallback-ref";

type SelectItemProps = {
    children?: ReactNode;
    className?: string;
} & RadixSelect.SelectItemProps;

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
    ({ children, className, ...props }, forwardedRef) => {
        return (
            <RadixSelect.Item
                className={cn(styles.item, className, "hover:bg-[#fccf55]/50")}
                {...props}
                ref={forwardedRef}>
                <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
                <RadixSelect.ItemIndicator>
                    <Icon glyph="checked" />
                </RadixSelect.ItemIndicator>
            </RadixSelect.Item>
        );
    }
);

SelectItem.displayName = "SelectItem";

type SelectProps = {
    className?: string;
    label?: React.ReactNode;
    items: { id: number | string; name: string }[];
    placeholder?: string;
    error?: string;
} & RadixSelect.SelectProps;

export const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
    ({ label, placeholder, items, className, error, ...props }, forwardedRef) => {
        const ref = useFallbackRef<HTMLButtonElement>(forwardedRef);

        const [open, setOpen] = useState(false);

        const width = useElementWidth(ref?.current);

        return (
            <RadixSelect.Root
                open={open}
                {...props}
                onOpenChange={(value) => {
                    setOpen(value);
                    props.onOpenChange?.(value);
                }}>
                <p className={cn("mb-3 font-semibold")}>{label}</p>

                <RadixSelect.Trigger
                    className={cn(styles.select, className, !props.value && "text-[#B5B3B2]", error && "!border-pink")}
                    ref={ref}>
                    <RadixSelect.Value ref={ref} placeholder={placeholder} />
                    <RadixSelect.Icon className={cn("transition-all -rotate-90 shrink-0", open && "rotate-0")}>
                        <Icon width={14} height={14} glyph="chevronDown" />
                    </RadixSelect.Icon>
                </RadixSelect.Trigger>

                {error && <div className="-mt-2 text-pink">{error}</div>}

                <RadixSelect.Portal>
                    <RadixSelect.Content
                        align="start"
                        side="bottom"
                        position="popper"
                        sideOffset={6}
                        className={styles.panel}
                        style={{ minWidth: width, maxWidth: width }}>
                        <RadixSelect.ScrollUpButton className="flex items-center justify-center h-[25px] cursor-default">
                            <Icon glyph="arrowRight" />
                        </RadixSelect.ScrollUpButton>
                        <RadixSelect.Viewport style={{ width: "100%" }}>
                            {items.map(({ id, name }) => (
                                <SelectItem key={id} value={String(id)}>
                                    {name}
                                </SelectItem>
                            ))}
                        </RadixSelect.Viewport>
                        <RadixSelect.ScrollDownButton className="flex items-center justify-center cursor-default">
                            <Icon glyph="arrowRight" />
                        </RadixSelect.ScrollDownButton>
                    </RadixSelect.Content>
                </RadixSelect.Portal>
            </RadixSelect.Root>
        );
    }
);

Select.displayName = "Select";

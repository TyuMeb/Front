import React, { ReactNode } from "react";
import * as RadixSelect from "@radix-ui/react-select";
import { cn } from "@src/shared/lib/cn";
import { Icon } from "@src/components/icon";
import styles from "./select.module.scss";

type SelectItemProps = {
    children?: ReactNode;
    className?: string;
} & RadixSelect.SelectItemProps;

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
    ({ children, className, ...props }, forwardedRef) => {
        return (
            <RadixSelect.Item className={cn(styles.item, className)} {...props} ref={forwardedRef}>
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
} & RadixSelect.SelectProps;

export const Select = React.forwardRef<HTMLSpanElement, SelectProps>(
    ({ label, placeholder, items, className, ...props }, ref) => (
        <RadixSelect.Root {...props}>
            <span className="mb-1 font-semibold">{label}</span>

            <RadixSelect.Trigger className={cn(styles.select, className)}>
                <RadixSelect.Value ref={ref} placeholder={placeholder} />
                <RadixSelect.Icon className="text-violet11">
                    <Icon width={14} height={14} glyph="chevronDown" />
                </RadixSelect.Icon>
            </RadixSelect.Trigger>
            <RadixSelect.Portal>
                <RadixSelect.Content
                    align="start"
                    side="bottom"
                    position="popper"
                    sideOffset={6}
                    className={styles.panel}>
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
    )
);

Select.displayName = "Select";

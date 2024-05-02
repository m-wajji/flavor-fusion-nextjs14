
import React from 'react';
import PropTypes from 'prop-types';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface ArrayOfOption {
    value: string;
    label: string;
}

interface Props {
    ArrayOfOption: ArrayOfOption[];
    placeholder: string;
}

export const SelectAccordion= ({ ArrayOfOption, placeholder }:Props) => {
    return (
        <Select>
            <SelectTrigger className="w-[280px]">
                <SelectValue className="placeholder-light-gray" placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                {ArrayOfOption.map(ArrayOfOption => (
                    <SelectItem key={ArrayOfOption.value} value={ArrayOfOption.value}>
                        {ArrayOfOption.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};


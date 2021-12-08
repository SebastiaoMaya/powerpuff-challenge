import { Box, Icon, Text } from "@chakra-ui/react";
import i18next from "i18next";
import React from "react";
import { components, default as ReactSelect } from "react-select";
import { customColors as colors } from "styles/theme";

interface SelectOption {
  value: string;
  label: string;
}

interface Props {
  defaultValue?: SelectOption;
  value?: SelectOption[];
  disabled?: boolean;
  label?: string;
  placeholder?: string;
  noOptionsMessage?: string;
  onChange: (options: any) => void;
  options: SelectOption[];
  width?: number;
  menuWidth?: number;
  menuMarginTop?: number;
  valuePadding?: number;
  fontSize?: number;
  onInputChange?: (value: string) => void;
  isMulti?: boolean;
  hideDropdownIndicator?: boolean;
  borderBottom?: number;
}

const selectStyles = {
  control: (base: any, state: any) => ({
    ...base,
    backgroundColor: "white",
    border: state.isFocused ? 0 : 0,
    width: state.selectProps.width ?? base.width,
    boxShadow: state.isFocused ? 0 : 0,
    "&:hover": {
      border: state.isFocused ? 0 : 0,
    },
    padding: 0,
    cursor: "pointer",
    minHeight: "initial",
  }),
  option: (base: any, state: any) => ({
    ...base,
    fontSize: state.selectProps.fontSize ?? "20px",
    fontWeight: state.isSelected ? "bold" : undefined,
    backgroundColor: state.isSelected
      ? colors.brandRed[300]
      : state.data.bg ?? "white",
    color: state.isSelected ? "white" : state.data.color ?? "black",
    "&:hover": {
      backgroundColor: colors.brandRed[300],
      opacity: 0.6,
      color: "white",
      fontWeight: "bold",
    },
  }),
  indicatorSeparator: (base: any) => ({
    ...base,
    display: "none",
  }),
  clearIndicator: (base: any) => ({
    ...base,
    padding: 0,
  }),
  dropdownIndicator: (base: any, state: any) => ({
    ...base,
    color: colors.brandRed[300],
    "&:hover": {
      color: colors.brandRed[900],
    },
    display: state.selectProps.hideDropdownIndicator ? "none" : undefined,
    padding: 0,
  }),
  menu: (base: any, state: any) => ({
    ...base,
    width: state.selectProps.menuWidth ?? base.width,
    borderRadius: 0,
    border: "3px solid",
    borderColor: colors.brandRed[300],
    marginTop: state.selectProps.menuMarginTop ?? base.marginTop,
    marginLeft: 11,
    boxShadow: 0,
    zIndex: 1,
  }),
  valueContainer: (base: any, state: any) => ({
    ...base,
    fontSize: state.selectProps.fontSize ?? "20px",
    padding: 0,
  }),
  multiValue: (base: any, state: any) => ({
    ...base,
    margin: "0 5px 5px 0",
  }),
  multiValueLabel: (base: any, state: any) => ({
    ...base,
    backgroundColor: "white",
    color: "black",
    borderRadius: 0,
    borderColor: "black",
    border: "1px solid",
    borderRight: 0,
  }),
  multiValueRemove: (base: any, state: any) => ({
    ...base,
    backgroundColor: "white",
    borderRadius: 0,
    borderColor: "black",
    border: "1px solid",
    borderLeft: 0,
    "&:hover": {
      color: "black",
      backgroundColor: "white",
    },
  }),
  placeholder: (base: any, state: any) => ({
    ...base,
    fontSize: "20px",
    color: "black",
  }),
};

const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <Icon name="arrowDown" />
    </components.DropdownIndicator>
  );
};

const MultiValueRemove = (props: any) => {
  return (
    <components.MultiValueRemove {...props}>
      <Icon name="close" />
    </components.MultiValueRemove>
  );
};

export const Select: React.FC<Props> = ({
  disabled,
  label,
  placeholder,
  onChange,
  options,
  defaultValue,
  width,
  menuWidth,
  menuMarginTop,
  isMulti,
  onInputChange,
  value,
  hideDropdownIndicator,
  borderBottom,
  noOptionsMessage,
  ...rest
}) => (
  <Box
    border="3px solid"
    borderColor="brandRed.300"
    px={2}
    py={1}
    {...(rest as any)}>
    {label && (
      <Text fontSize={1} textTransform="uppercase">
        {label}
      </Text>
    )}
    <ReactSelect
      isDisabled={disabled}
      value={value}
      placeholder={placeholder ?? i18next.t("shared:select.placeholder")}
      onChange={onChange}
      options={options}
      styles={selectStyles}
      components={{ DropdownIndicator, MultiValueRemove }}
      defaultValue={defaultValue}
      width={"100%"}
      menuWidth={"100%"}
      menuMarginTop={menuMarginTop ?? 4}
      fontSize={20}
      isMulti={isMulti}
      onInputChange={onInputChange}
      hideDropdownIndicator={hideDropdownIndicator}
      noOptionsMessage={() => (noOptionsMessage ? noOptionsMessage : null)}
    />
  </Box>
);

Select.defaultProps = {
  disabled: false,
  valuePadding: 8,
  borderBottom: 0,
  noOptionsMessage: i18next.t("shared:select.noResults"),
};

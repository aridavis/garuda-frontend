export const generateAsyncProps = (url, valueKey, textKey) => {
  return {
    url,
    valueKey,
    textKey,
  };
};

export const generateOptionProps = (text, value) => {
  return { text, value };
};

export const generateInputFieldProps = (
  name,
  label,
  type,
  options,
  async,
  defaultValue,
  defaultValueKey,
  disabled,
  hidden
) => ({
  name: name,
  label: label,
  type: type,
  options: options,
  async: async,
  defaultValue: defaultValue,
  defaultValueKey: defaultValueKey,
  disabled: disabled,
  hidden: hidden,
});
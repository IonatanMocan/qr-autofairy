export const countPercentage = (formik, key) => {
  // debugger
  if (!formik.dirty) {
    return 0;
  }
  const valueKeys = Object.keys(formik.values[key]);
  const percentage = 100 / valueKeys.length;

  const itemsWithoutErrors = valueKeys.reduce((acc, item) => {
    // debugger
    return !formik.errors[key]?.[item] ? acc + 1 : acc;
  }, 0);
  return itemsWithoutErrors * percentage;
};

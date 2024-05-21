export const filterData = (data, filterParams) => {
  return data.filter(item => {
    if (
      filterParams.location &&
      !item.location.includes(filterParams.location)
    ) {
      return false;
    }

    if (filterParams.form && item.form !== filterParams.form) {
      return false;
    }

    if (filterParams.details && filterParams.details.length > 0) {
      for (let detail of filterParams.details) {
        if (!item.details[detail]) {
          return false;
        }
      }
    }

    return true;
  });
};

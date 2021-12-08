export const prePopulateForm = jest.fn();
const mock = jest.fn().mockImplementation(() => {
  return {prePopulateForm:prePopulateForm};
});

export default mock;
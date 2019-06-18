export const findByTestAttr = (component, attrValue) => {
    const wrapper = component.find(`[data-test='${attrValue}']`);
    return wrapper;
}
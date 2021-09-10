export default {
  /**
   * Determine whether it is a picture object
   *
   * @return {boolean} is or no
   */
  isImage(obj) {
    if (!obj) return false;

    const tagName = `${obj.tagName}`.toUpperCase();
    const nodeName = `${obj.nodeName}`.toUpperCase();
    if (nodeName === "IMG" || tagName === "IMG") return true;
    return false;
  },

  /**
   * Determine whether it is a string object
   *
   * @return {boolean} is or no
   */
  isString(obj) {
    return typeof obj === "string";
  }
};

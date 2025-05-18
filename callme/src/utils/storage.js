const CallMe_Key = "CallMe_Key";

/** 创建本地存储 */
function createStorage(key, isObj = true) {
  if (!key || typeof key !== "string") {
    throw new Error("Storage key must be a valid string");
  }

  function setItem(value) {
    if (isObj && typeof value === "object" && value !== null) {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, value);
    }
  }
  function getItem() {
    const storedValue = localStorage.getItem(key);
    if (!storedValue) return null;

    try {
      return isObj ? JSON.parse(storedValue) : storedValue;
    } catch (e) {
      return storedValue;
    }
  }
  function removeItem() {
    localStorage.removeItem(key);
  }
  function clear() {
    localStorage.clear();
  }

  return { setItem, getItem, removeItem, clear };
}

export default { createStorage, CallMe_Key };

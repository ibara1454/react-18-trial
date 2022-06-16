import JacketImg from "./jacket.jpg";

export const itemDetail = {
  name: "Classic Utility Jacket",
  price: "$110.00",
  imageUrl: JacketImg,
  status: "In stock",
};

/**
 * @param {Number} ms The number of milliseconds to wait before resolving the promise.
 * @returns {Promise} A promise that resolves after the specified number of milliseconds.
 */
async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchItemDetail() {
  await delay(5000);
  return itemDetail;
}

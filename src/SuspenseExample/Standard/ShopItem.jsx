import { useFetch } from "./model";

const ItemDetails = () => {
  const { data } = useFetch();

  if (data) {
    return (
      <div className="flex flex-wrap">
        <ItemName name={data.name} />
        <ItemPrice price={data.price} />
        <ItemStatus status={data.status} />
      </div>
    );
  }

  return (
    <div className="flex flex-wrap">
      <PendingItemName />
      <PendingItemPrice />
      <PendingItemStatus />
    </div>
  );
};

const PendingItemName = () => {
  return (
    <div className="mr-auto h-6 flex items-center">
      <div className="animate-pulse h-3 w-36 bg-slate-700 rounded-full"></div>
    </div>
  );
};

const ItemName = ({ name }) => {
  return (
    <h1 className="flex-auto text-lg align-middle font-semibold text-slate-900">
      {name}
    </h1>
  );
};

const PendingItemPrice = () => {
  return (
    <div className="h-6 flex items-center">
      <div className="animate-pulse h-3 w-12 bg-slate-700 rounded-full"></div>
    </div>
  );
};

const ItemPrice = ({ price }) => {
  return (
    <div className="text-lg align-middle font-semibold text-slate-500">
      {price}
    </div>
  );
};

const PendingItemStatus = () => {
  return (
    <div className="w-full h-6 flex-none flex items-center">
      <div className="animate-pulse h-3 w-24 bg-slate-700 rounded-full"></div>
    </div>
  );
};

const ItemStatus = ({ status }) => {
  return (
    <div className="w-full flex-none align-middle text-sm font-medium text-slate-700">
      {status}
    </div>
  );
};

const Image = () => {
  const { data } = useFetch();

  if (data) {
    return (
      <div className="flex-none w-48 relative flex items-center justify-center">
        <img
          src={data.imageUrl}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="flex-none w-48 relative flex items-center justify-center">
      <PendingImage />
    </div>
  );
};

const PendingImage = () => {
  // Reference: https://codepen.io/nikhil8krishnan/pen/rVoXJa
  return (
    <svg
      className="text-slate-700"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="150"
      height="150"
      viewBox="0 0 100 100"
    >
      <path
        fill="currentColor"
        d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          dur="1.5s"
          from="0 50 50"
          to="360 50 50"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
};

const ShopItem = () => {
  return (
    <div className="flex font-sans bg-slate-100 rounded-2xl overflow-hidden w-max h-max">
      <Image />
      <form className="flex-auto p-6">
        <ItemDetails />
        <div className="flex mt-4 mb-6 pb-6 border-b border-slate-200">
          <div className="space-x-2 flex text-sm">
            <label className="cursor-pointer">
              <input
                className="sr-only peer"
                name="size"
                type="radio"
                value="xs"
                defaultChecked
              />
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                XS
              </div>
            </label>
            <label className="cursor-pointer">
              <input
                className="sr-only peer"
                name="size"
                type="radio"
                value="s"
              />
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                S
              </div>
            </label>
            <label className="cursor-pointer">
              <input
                className="sr-only peer"
                name="size"
                type="radio"
                value="m"
              />
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                M
              </div>
            </label>
            <label className="cursor-pointer">
              <input
                className="sr-only peer"
                name="size"
                type="radio"
                value="l"
              />
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                L
              </div>
            </label>
            <label className="cursor-pointer">
              <input
                className="sr-only peer"
                name="size"
                type="radio"
                value="xl"
              />
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                XL
              </div>
            </label>
          </div>
        </div>
        <div className="flex space-x-4 mb-6 text-sm font-medium">
          <div className="flex-auto flex space-x-4">
            <button
              className="h-10 px-6 font-semibold rounded-md bg-black text-white"
              type="button"
            >
              Buy now
            </button>
            <button
              className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
              type="button"
            >
              Add to bag
            </button>
          </div>
          <button
            className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200"
            type="button"
            aria-label="Like"
          >
            <svg width="20" height="20" fill="currentColor" aria-hidden="true">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              />
            </svg>
          </button>
        </div>
        <p className="text-sm text-slate-700">
          Free shipping on all continental US orders.
        </p>
      </form>
    </div>
  );
};

export default ShopItem;

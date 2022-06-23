import ReactCodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import ShopItem from "./ShopItem";

const code = `const ItemDetails = () => {
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

`;

const CodeSnippet = () => {
  return (
    <ReactCodeMirror
      value={code}
      height="600px"
      width="100%"
      theme="dark"
      extensions={[javascript({ jsx: true })]}
    />
  );
};

export default () => {
  return (
    <div className="flex gap-8 w-full">
      <div className="flex-1 flex justify-center items-center">
        <ShopItem />
      </div>
      <div className="flex-1 rounded-2xl overflow-hidden">
        <CodeSnippet />
      </div>
    </div>
  );
};

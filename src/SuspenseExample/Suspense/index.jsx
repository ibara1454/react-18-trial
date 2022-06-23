import ReactCodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import ShopItem from "./ShopItem";

const code = `import { Suspense } from "react";
import { RecoilRoot, useRecoilValue } from "recoil";
import { itemDetailsState } from "./model";

const ItemDetails = () => {
  return (
    <div className="flex flex-wrap">
      <Suspense fallback={<PendingItemName />}>
        <SuspendedItemName />
      </Suspense>
      <Suspense fallback={<PendingItemPrice />}>
        <SuspendedItemPrice />
      </Suspense>
      <Suspense fallback={<PendingItemStatus />}>
        <SuspendedItemStatus />
      </Suspense>
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

const SuspendedItemName = () => {
  const { name } = useRecoilValue(itemDetailsState);

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

const SuspendedItemPrice = () => {
  const { price } = useRecoilValue(itemDetailsState);

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

const SuspendedItemStatus = () => {
  const { status } = useRecoilValue(itemDetailsState);

  return (
    <div className="w-full flex-none align-middle text-sm font-medium text-slate-700">
      {status}
    </div>
  );
};

const Image = () => {
  return (
    <div className="flex-none w-48 relative flex items-center justify-center">
      <Suspense fallback={<PendingImage />}>
        <SuspendedImage />
      </Suspense>
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

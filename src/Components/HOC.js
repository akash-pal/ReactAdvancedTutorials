import React, { useState, Suspense } from "react";
const CurrencyConverterHOC = React.lazy(() => import("./CurrencyConverterHOC"));

export default function HOC() {
  const [lazyLoad, setLazyLoad] = useState(false);
  const load = () => setLazyLoad((lazyLoad) => !lazyLoad);
  return (
    <div>
      <div>HOC</div>
      <button onClick={load}>Lazy Load</button>
      {lazyLoad && (
        <Suspense fallback={<div>Loading---</div>}>
          <CurrencyConverterHOC />
        </Suspense>
      )}
    </div>
  );
}

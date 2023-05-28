import dynamic from "next/dynamic";
import React, { useState } from "react";

const BigComponent = dynamic(() => import("@/BigComponent"));

const DynamicImportPage = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button type="button" onClick={() => setShow(true)}>
        show
      </button>

      {show && <BigComponent />}
    </div>
  );
};

export default DynamicImportPage;

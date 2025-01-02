import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { Suspense } from "react";
import { BarLoader } from "react-spinners";

const WriteLayout = ({ children }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <Link
          href={"/dashboard"}
          className="flex items-center gap-2 text-sm text-orange-600 hover:text-orange-700 cursor-pointer"
        >
          <ArrowLeft /> Back to Dashboard
        </Link>
      </div>
      <Suspense fallback={<BarLoader color="orange" width={"100%"} />}>
        {children}
      </Suspense>
    </div>
  );
};

export default WriteLayout;

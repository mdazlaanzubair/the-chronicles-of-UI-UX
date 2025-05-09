import React from "react";

type Props = {};

const AvailabilityStatus = (props: Props) => {
  return (
    <div className="w-fit flex items-center justify-between gap-2">
      <div className="inline-grid *:[grid-area:1/1]">
        <div className="status status-accent animate-ping"></div>
        <div className="status status-accent"></div>
      </div>
      <small className="text-xs font-medium text-base-content">Open to work</small>
    </div>
  );
};

export default AvailabilityStatus;
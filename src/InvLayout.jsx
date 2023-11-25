import React, { useState, useEffect } from "react";
import { subSysContent } from "./sidebar";

export default function InvLayout() {
    return (
        <div
            //  className="container"
            className={subSysContent.value == 2 ? "container" : "d-none"}
        >
            المخازن
        </div>
    );
}

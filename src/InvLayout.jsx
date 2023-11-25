import React, { useState, useEffect } from "react";
import { subSystems, subSysId } from "../src/data/subsytems.js"

export default function InvLayout() {
    return (
        <div
            //  className="container"
            className={subSysId.value == 2 ? "container" : "d-none"}
        >
            المخازن
        </div>
    );
}

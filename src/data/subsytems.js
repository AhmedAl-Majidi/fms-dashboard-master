import { signal } from "@preact/signals-react";

export const subSystems = [
    {
        id:1,
        name:"الحسابات العامة"
    },
    {
        id:2,
        name:"المخـــازن"
    }
]

// 
export const subSysId = signal(1);

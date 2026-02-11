"use client";

import { ITEMLIMITS } from "@/app/data/constants"
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function LimitSelect() {

    const searchParams = useSearchParams();
    const router = useRouter();
    const pathName = usePathname();

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newLimit = event.target.value;
        const params = new URLSearchParams(searchParams.toString());
        params.set("limit", newLimit);

        router.push(`${pathName}?${params.toString()}`)
    }
    return (
        <form className="">
            <label htmlFor="limit-select">Limit:</label>
            <select id="limit-select" name="limit" onChange={handleChange} >
                {ITEMLIMITS.map((i) => <option key={`limit-select-${i}`} value={i}>{i}</option>)}
            </select>
        </form >
    )
}
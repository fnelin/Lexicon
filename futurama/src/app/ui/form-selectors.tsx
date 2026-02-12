"use client";

import { ITEMLIMITS } from "@/app/data/constants"
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function FormSelectors() {

    const searchParams = useSearchParams();
    const router = useRouter();
    const pathName = usePathname();

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newValue = event.target.value;
        const sourceName = event.target.name;
        const page = "1";
        const params = new URLSearchParams(searchParams.toString());

        params.set(sourceName, newValue);
        params.set("page", page);

        router.push(`${pathName}?${params.toString()}`)
    }

    return (

        <form className="flex gap-4 justify-center mb-2">
            <span>
                <label
                    htmlFor="limit-select"
                    className="p-1">
                    Limit:
                </label>
                <select
                    id="limit-select"
                    name="limit"
                    onChange={handleChange}>
                    {
                        ITEMLIMITS.map((i) =>
                            <option
                                key={`limit-select-${i}`}
                                value={i}>
                                {i}
                            </option>)
                    }
                </select>
            </span>
            <span>
                <label
                    htmlFor="sort-select"
                    className="p-1">
                    Sortorder:
                </label>
                <select
                    id="sort-select"
                    name="sort"
                    onChange={handleChange} >
                    <option
                        key="sortAsc"
                        value="asc">
                        Ascending
                    </option>
                    <option
                        key="sortDesc"
                        value="desc">
                        Descending
                    </option>
                </select>
            </span>
        </form >
    )
}
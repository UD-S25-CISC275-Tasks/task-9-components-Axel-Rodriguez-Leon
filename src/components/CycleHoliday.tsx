import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<string>("🪅");

    function nextAlphabet(): void {
        if (holiday === "🪅") {
            setHoliday("🎄");
        } else if (holiday === "🎄") {
            setHoliday("🎆");
        } else if (holiday === "🎆") {
            setHoliday("🎃");
        } else if (holiday === "🎃") {
            setHoliday("❤️");
        } else if (holiday === "❤️") {
            setHoliday("🪅");
        }
    }

    function nextDate(): void {
        if (holiday === "❤️") {
            setHoliday("🪅");
        } else if (holiday === "🪅") {
            setHoliday("🎆");
        } else if (holiday === "🎆") {
            setHoliday("🎃");
        } else if (holiday === "🎃") {
            setHoliday("🎄");
        } else if (holiday === "🎄") {
            setHoliday("❤️");
        }
    }

    return (
        <div>
            <Button onClick={nextAlphabet}> Advance by Alphabet</Button>
            <Button onClick={nextDate}> Advance by Year</Button>
            <div>Holiday: {holiday}</div>
        </div>
    );
}

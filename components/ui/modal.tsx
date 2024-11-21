"use client"

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog";

export default function Modal() {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const randomDelay = Math.floor(Math.random() * (25 - 15 + 1) + 15) * 1000;

        const timer = setTimeout(() => {
            setShowModal(true);
        }, randomDelay);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setShowModal(false); // Close the dialog
    };

    return (
        <Dialog open={showModal} onOpenChange={handleClose}>
            <DialogTitle></DialogTitle>
            <DialogContent className="w-11/12 md:w-3/5 py-12">
                <div className="flex flex-col space-between w-full items-center">
                    <h3 className="scroll-m-20 text-xl md:text-2xl font-semibold tracking-tight text-center">
                        Not sure if you need tutoring?
                    </h3>
                    <h3 className="scroll-m-20 text-xl md:text-2xl font-semibold tracking-tight text-center">
                        Still unsure about pricing or quality?
                    </h3>
                    <p className="leading-7 [&:not(:first-child)]:mt-6 text-center text-lg">
                        Experience a free lesson and see why our tutoring stands out. No obligations, just quality education.
                    </p>
                    <a href="mailto:talimtutoring@gmail.com">
                        <Button type="submit" onClick={handleClose} className="mt-12 bg-blue-700 text-md md:text-lg font-bold ">
                            Schedule Your Free Consultation
                        </Button>
                    </a>
                </div>
            </DialogContent>
        </Dialog>
    );
}

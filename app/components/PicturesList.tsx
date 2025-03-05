"use client";

import { useState } from "react";
import PictureItem from "./PictureItem";
import { Event, Picture } from "@prisma/client";

const PAGE_SIZE = 6;

const PicturesList = ({ pictures, event }: { pictures: Picture[]; event?: Event }) => {

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(pictures.length / PAGE_SIZE);
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const currentPictures = pictures.slice(startIndex, startIndex + PAGE_SIZE);

    const handlePrevious = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const handleNext = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    return (
        <div className="pictures_list">
            {event && (
                <h2 className="text-xl font-bold mb-4 pictures_list__title">
                    Your best pictures from <strong>{event.name}</strong>
                </h2>
            )}
            <div className="grid grid-cols-3 gap-4 pictures_list__content">
                {currentPictures.map((picture) => (
                    <PictureItem key={picture.id} picture={picture} />
                ))}
            </div>
            {pictures.length > PAGE_SIZE && (
                <div className="pagination mt-4 flex justify-center items-center space-x-4">
                    <button
                        onClick={handlePrevious}
                        disabled={currentPage === 1}
                        className="btn btn-prev"
                    >
                        Previous
                    </button>
                    <span>
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className="btn btn-next"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default PicturesList;

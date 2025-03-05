import PictureItem from "./PictureItem";
import { Event, Picture } from "@prisma/client";

const PicturesList = ({ pictures, event }: { pictures: Picture[], event?: Event }) => {
    if (pictures.length === 0) return null
    return (
        <div className="pictures_list">
            {event && <h2 className="text-xl font-bold mb-4 pictures_list__title">Your best pictures from <strong>{event.name}</strong></h2>}
            <div className="grid grid-cols-3 gap-4 pictures_list__content">
                {pictures.length > 0 ? (

                    pictures.map((picture) => (
                        <PictureItem key={picture.id} picture={picture} />
                    ))
                ) : (
                    <p>No pictures found for this event.</p>
                )}
            </div>
        </div>
    );
};

export default PicturesList;

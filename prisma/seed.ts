import { PrismaClient } from '@prisma/client';
import fs from "fs"
import path from "path"
import cloudinary from "cloudinary"

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
export default cloudinary

const prisma = new PrismaClient();

async function main() {
    // Liste des festivals métal
    const festivals = [
        {
            name: 'Hellfest',
            desc: 'Le Hellfest est l\'un des plus grands festivals de métal en Europe, situé en France.',
            picture: 'https://res.cloudinary.com/dol2iveps/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1741016569/hellfest-2024_iy0bfz.webp',
            address: {
                type: 'Point',
                coordinates: [1.559, 47.211], // Coordonnées géographiques (exemple pour Clisson, France)
            },
            start_at: new Date('2025-06-20T12:00:00'),
            end_at: new Date('2025-06-22T23:59:59'),
        },
        {
            name: 'Graspop Metal Meeting',
            desc: 'Graspop est l\'un des plus célèbres festivals de métal en Belgique, attirant des milliers de fans chaque année.',
            picture: 'https://res.cloudinary.com/dol2iveps/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1741016569/graspop-metal-meeting-2024_dxcida.jpg',
            address: {
                type: 'Point',
                coordinates: [5.399, 51.179], // Coordonnées géographiques (exemple pour Dessel, Belgique)
            },
            start_at: new Date('2025-06-28T12:00:00'),
            end_at: new Date('2025-06-30T23:59:59'),
        },
        {
            name: 'Wacken Open Air',
            desc: 'Le Wacken Open Air en Allemagne est l\'un des plus grands festivals de métal du monde.',
            picture: 'https://res.cloudinary.com/dol2iveps/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1741016570/wacken-2024_z2siwc.jpg',
            address: {
                type: 'Point',
                coordinates: [9.067, 54.139], // Coordonnées géographiques (exemple pour Wacken, Allemagne)
            },
            start_at: new Date('2025-08-01T12:00:00'),
            end_at: new Date('2025-08-03T23:59:59'),
        },
        {
            name: '70000 Tons of Metal',
            desc: '70000 Tons of Metal est un festival unique en son genre sur un bateau, offrant une expérience incroyable aux fans de métal.',
            picture: 'https://res.cloudinary.com/dol2iveps/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1741016569/70000-tons-of-metal-2024_qkknsg.webp',
            address: {
                type: 'Point',
                coordinates: [-80.189, 25.761], // Coordonnées géographiques (exemple pour Miami, USA)
            },
            start_at: new Date('2025-01-01T12:00:00'),
            end_at: new Date('2025-01-05T23:59:59'),
        },
        {
            name: 'Download Festival',
            desc: 'Le Download Festival au Royaume-Uni est l\'un des plus grands festivals de métal, accueillant des groupes légendaires.',
            picture: 'https://res.cloudinary.com/dol2iveps/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1741016569/download-festival-2024_lanozz.jpg',
            address: {
                type: 'Point',
                coordinates: [-1.267, 52.942], // Coordonnées géographiques (exemple pour Donington Park, UK)
            },
            start_at: new Date('2025-06-05T12:00:00'),
            end_at: new Date('2025-06-07T23:59:59'),
        },
        {
            name: 'Rock Fest Barcelona',
            desc: 'Rock Fest Barcelona est un festival de métal et de rock majeur, attirant des groupes légendaires à Barcelone chaque année.',
            picture: 'https://res.cloudinary.com/dol2iveps/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1741016570/rock-fest-barcelona-2024_cqtmka.jpg',
            address: {
                type: 'Point',
                coordinates: [2.2137, 41.5636], // Coordonnées géographiques de Barcelone, Espagne
            },
            start_at: new Date('2024-07-05T12:00:00'),
            end_at: new Date('2024-07-07T23:59:59'),
        },
        {
            name: 'Rock Am Ring',
            desc: 'Rock Am Ring en Allemagne est un festival de rock et métal attirant des milliers de spectateurs chaque année.',
            picture: 'https://res.cloudinary.com/dol2iveps/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1741016570/rock-am-ring-2024_k7yj4g.jpg',
            address: {
                type: 'Point',
                coordinates: [7.092, 50.385], // Coordonnées géographiques (exemple pour Nürburg, Allemagne)
            },
            start_at: new Date('2025-06-05T12:00:00'),
            end_at: new Date('2025-06-07T23:59:59'),
        },
        {
            name: 'Vagos Metal Fest',
            desc: 'Le Vagos Metal Fest est un festival de métal majeur en Portugal, attirant des groupes internationaux.',
            picture: 'https://res.cloudinary.com/dol2iveps/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1741016570/vagos-metal-fest-2024_qu7zp7.webp',
            address: {
                type: 'Point',
                coordinates: [-8.529, 40.618], // Coordonnées géographiques (exemple pour Vagos, Portugal)
            },
            start_at: new Date('2025-08-12T12:00:00'),
            end_at: new Date('2025-08-14T23:59:59'),
        },
        {
            name: 'Summer Breeze',
            desc: 'Le Summer Breeze est un autre festival majeur en Allemagne, axé sur le métal, offrant une atmosphère unique.',
            picture: 'https://res.cloudinary.com/dol2iveps/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1741016570/summer-breeze-2024_bsys9t.jpg',
            address: {
                type: 'Point',
                coordinates: [10.242, 49.271], // Coordonnées géographiques (exemple pour Dinkelsbühl, Allemagne)
            },
            start_at: new Date('2025-08-20T12:00:00'),
            end_at: new Date('2025-08-23T23:59:59'),
        },
        {
            name: 'Bloodstock Open Air',
            desc: 'Bloodstock Open Air est un festival métal majeur au Royaume-Uni, réputé pour sa programmation de haute qualité.',
            picture: 'https://res.cloudinary.com/dol2iveps/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1741016569/bloodstock-2024_esgl6z.jpg',
            address: {
                type: 'Point',
                coordinates: [-1.345, 52.625], // Coordonnées géographiques (exemple pour Catton Park, UK)
            },
            start_at: new Date('2025-08-06T12:00:00'),
            end_at: new Date('2025-08-09T23:59:59'),
        },
    ];
    const nbEvents = festivals.length
    const picturesDir = path.join(__dirname, "../../evently-pictures");
    const files = fs.readdirSync(picturesDir);
    const pictureFiles = files.filter(file => /^photo_0\d+_.+\.jpg$/.test(file));
    const nbPictures = pictureFiles.length
    const nbExistingEvents = await prisma.event.count();
    const nbExistingPictures = await prisma.picture.count();
    if ((nbEvents == nbExistingEvents) && (nbPictures == nbExistingPictures)) {
        console.log(`Skipping seeding : events and pictures already exist.`);
        return; // If events already exist, exit the seeding process
    }
    const uploadToCloudinary = async (filePath: string) => {
        try {
            const uploadResponse = await cloudinary.v2.uploader.upload(filePath, {
                folder: 'evently/pictures',  // Optional: specify a folder in Cloudinary
            });
            return uploadResponse.secure_url;  // The URL of the uploaded image
        } catch (error) {
            console.error('Error uploading to Cloudinary:', error);
            return null;
        }
    };
    await prisma.picture.deleteMany()
    await prisma.event.deleteMany();

    // Insérer les événements dans la base de données
    let nbEventsSeeded = 0
    for (let i = 0; i < nbEvents; i++) {
        const festival = festivals[i]
        console.log(festival)
        // Create event with pictures attached
        const event = await prisma.event.create({
            data: festival,
        });
        if(event) {
            nbEventsSeeded++
        }
        const eventId = event.id
        // Get pictures
        const festivalPictures = pictureFiles.filter(file => file.startsWith(`photo_0${i}`))
        console.log(festivalPictures)
        // Upload them
        const nbPicturesForEvent = festivalPictures.length
        let nbPicturesUploaded = 0
        let nbPicturesSeeded = 0
        for (let pictureFile of festivalPictures) {
            const filePath = path.join(picturesDir, pictureFile);
            const imageUrl = await uploadToCloudinary(filePath);
            nbPicturesUploaded++;
            if (imageUrl) {
                const picture = await prisma.picture.create({
                    data : {
                        "event_id": eventId,
                        "url": imageUrl
                    }
                })
                if(picture) {
                    nbPicturesSeeded++;
                }
            }
        }
        console.log(`Inserted event: ${event.name} with ${nbPicturesUploaded} pictures uploaded and ${nbPicturesSeeded} pictures seeded.`);
    }

    console.log(`${nbEventsSeeded}/${nbEvents} événements ont été insérés dans la base de données !`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

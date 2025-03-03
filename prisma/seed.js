"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var festivals, _i, festivals_1, festival;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.event.deleteMany()];
                case 1:
                    _a.sent();
                    festivals = [
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
                    _i = 0, festivals_1 = festivals;
                    _a.label = 2;
                case 2:
                    if (!(_i < festivals_1.length)) return [3 /*break*/, 5];
                    festival = festivals_1[_i];
                    return [4 /*yield*/, prisma.event.create({
                            data: festival,
                        })];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 2];
                case 5:
                    console.log('10 événements ont été insérés dans la base de données !');
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .catch(function (e) {
    console.error(e);
    process.exit(1);
})
    .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });

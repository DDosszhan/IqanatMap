export type BuildingGeometry = {
  id: string;
  points: string;
  marker: { x: number; y: number };
};

// Coordinates use the source image's 1672 x 941 space and scale with the SVG viewBox.
export const buildingGeometry: BuildingGeometry[] = [
  {
    id: "teacher-house",
    points: "142,203 201,186 313,216 350,250 374,269 382,365 344,407 264,396 177,359 153,318",
    marker: { x: 270, y: 291 },
  },
  {
    id: "student-house",
    points: "444,351 533,333 558,447 740,477 754,539 719,587 482,553 458,507",
    marker: { x: 591, y: 482 },
  },
  {
    id: "main-school",
    points: "1053,297 1109,295 1118,332 1174,330 1190,445 1308,449 1325,515 1345,522 1351,570 1318,611 1212,587 1171,574 1129,596 1080,578 1051,558 870,571 861,489 1052,447",
    marker: { x: 1157, y: 490 },
  },
  {
    id: "freedom-house",
    points: "1254,261 1335,238 1458,282 1451,357 1391,414 1289,393 1263,342",
    marker: { x: 1363, y: 323 },
  },
];

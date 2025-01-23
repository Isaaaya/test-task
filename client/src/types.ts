export type ApartmentType = {
    _id?: string,
    title?: string,
    description?: string,
    price?: number,
    rooms?: 1 | 2 | 3,
};


export type FiltersType = {
    rooms: 1 | 2 | 3 | null;
    price: number | null;
};
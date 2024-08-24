import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export type Image = {
    id: string;
    urls: {
        small: string;
        regular: string;
        full: string;
    };
    description: string;
    user: {
        name: string;
    };
    likes: number;
};

export const fetchImages = async (image: string, page: number = 1): Promise<Image[]> => {
    const response = await axios.get("/search/photos", {
        headers: {
            Authorization: 'Client-ID iLgJU4Qg_HCRfzWz2icD7AEFTes8NfzFe0Y55lU7PMw'
        },
        params: {
            query: image,
            per_page: 12,
            page,
        }
    });
    return response.data.results;
};
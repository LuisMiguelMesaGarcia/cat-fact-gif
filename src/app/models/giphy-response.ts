export interface GiphyResponse {
  data: GiphyData[];
}

export interface GiphyData {
  images: GiphyImages;
}

export interface GiphyImages {
  original: GiphyImage;
}

export interface GiphyImage {
  url: string;
}
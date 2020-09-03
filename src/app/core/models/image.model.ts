export interface Image {
  id: string;
  alt_description: string;
  urls: {
    regular: string,
    download: string;
  };
  user: {
    links: {
      html: string;
    }
  };
}

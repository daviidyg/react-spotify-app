interface ExplicitContent {
    filter_enabled: boolean;
    filter_locked: boolean;
}

interface ExternalUrls {
    spotify: string;
}

interface Followers {
    href: string;
    total: number;
}

interface Images {
    url: string;
    height: number;
    width: number;
}

export interface ProfileInfo {
    country: string;
    display_name: string;
    email: string;
    explicit_content: ExplicitContent;
    external_urls: ExternalUrls;
    followers: Followers;
    href: string;
    id: string;
    images: Images[];
    product: string;
    type: string;
    uri: string;
}

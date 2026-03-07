export interface SocialCard {
    platform: string;
    url: string;
    icon: "linkedin" | "x" | "instagram" | "youtube";
    color: string;
}

/**
 * Social media cards — add a new entry to extend the grid.
 * The `icon` field maps to react-icons components in ConnectSection.
 * The `color` field is used as the CSS `--card-accent` custom property for hover effects.
 */
export const socialCards: SocialCard[] = [
    {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/prasunchakra/",
        icon: "linkedin",
        color: "#0A66C2",
    },
    {
        platform: "X",
        url: "https://x.com/prasunchakra",
        icon: "x",
        color: "#1DA1F2",
    },
    {
        platform: "Instagram",
        url: "https://www.instagram.com/prasunchakra/",
        icon: "instagram",
        color: "#E4405F",
    },
    {
        platform: "YouTube",
        url: "https://www.youtube.com/@prasunchakra",
        icon: "youtube",
        color: "#FF0000",
    },
];
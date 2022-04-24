import { GangsterScreen } from "../components/Gangster/GangsterScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { WarScreen } from "../components/War/WarScreen";

export const navigationLinks = [
    {
        id: 1,
        to: 'gangsters',
        label: 'Gangster',
        Component: GangsterScreen
    },
    {
        id: 2,
        to: 'war',
        label: 'War',
        Component: WarScreen
    },
    {
        id: 3,
        to: 'search',
        label: 'Search',
        Component: SearchScreen
    },
]
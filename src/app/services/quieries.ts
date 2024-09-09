import useSWR from "swr";
import { Game } from "../models/game";
import { GameList } from "../models/gameList";

export function useGames(){
    return useSWR<GameList>("/games");
}
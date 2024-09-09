import useSWR from "swr";
import { Game } from "../models/game";

export function useGames(){
    return useSWR<Game[]>("/games");
}
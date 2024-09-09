"use client";
import { useGames } from "@/app/services/quieries";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "./ui/card";
import Image from "next/image";

export default function Games() {
  const { data } = useGames();
  return (
    <div>
      <p>Games : </p>
      {data?.map((game) => (
        <li key={game.id}>
          <Card>
            <CardHeader>
              <CardTitle>{game.name}</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={game.background_image}
                alt={game.name}
                width={300}
                height={300}
                className="rounded-md"
              />
            </CardContent>
            <CardFooter>
              <p>{game.platforms}</p>
            </CardFooter>
          </Card>
        </li>
      ))}
      
    </div>
  );
}

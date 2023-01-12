import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import Image from "next/image";
import Link from "next/link";

export default function PokemonList({ pokemonData }) {
  // It's better to use React Query than useEffect and useState for API calls
  const { data } = useQuery(`pokémon data ${pokemonData.name}`, async () => {
    const response = await axios.get(pokemonData.url);

    return response.data;
  });

  return (
    data && (
      <Link href={"pokemon/" + data.id} className="flex px-10">
        <div className="mx-auto bg-white rounded-md w-96 my-2 flex shadow">
          <div className="flex mx-auto">
            <Image
              src={data.sprites.front_default}
              width={40}
              height={40}
              alt={data.name + "icon"}
              className="w-[40px] h-[40px] object-contain"
            />
            <p className="align-middle text-center my-auto flex capitalize">
              {data.name}
              <span className="font-bold ml-1">{data.base_experience}XP</span>
            </p>
          </div>
        </div>
      </Link>
    )
  );
}

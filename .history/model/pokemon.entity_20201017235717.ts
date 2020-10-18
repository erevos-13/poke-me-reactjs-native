export interface PokemonDTO {
    id: number;
    name: string;
    url: string;
    image: string;
    info?: IInfo
}


export interface IInfo {
    abilities: Ability2[];
    base_experience: number;
    forms: Ability[];
    game_indices: Gameindex[];
    height: number;
    held_items: any[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Move[];
    name: string;
    order: number;
    species: Ability;
    sprites: Sprites;
    stats: Stat[];
    types: Type[];
    weight: number;
    image?: string;
}

export interface Type {
    slot: number;
    type: Ability;
}

export interface Stat {
    base_stat: number;
    effort: number;
    stat: Ability;
}

export interface Sprites {
    back_default: string;
    back_female?: any;
    back_shiny: string;
    back_shiny_female?: any;
    front_default: string;
    front_female?: any;
    front_shiny: string;
    front_shiny_female?: any;
    other: Other;
    versions: Versions;
}

export interface Versions {
    'generation-i': Generationi;
    'generation-ii': Generationii;
    'generation-iii': Generationiii;
    'generation-iv': Generationiv;
    'generation-v': Generationv;
    'generation-vi': Generationvi;
    'generation-vii': Generationvii;
    'generation-viii': Generationviii;
}

export interface Generationviii {
    icons: Dreamworld;
}

export interface Generationvii {
    icons: Dreamworld;
    'ultra-sun-ultra-moon': Omegarubyalphasapphire;
}

export interface Generationvi {
    'omegaruby-alphasapphire': Omegarubyalphasapphire;
    'x-y': Omegarubyalphasapphire;
}

export interface Omegarubyalphasapphire {
    front_default: string;
    front_female?: any;
    front_shiny: string;
    front_shiny_female?: any;
}

export interface Generationv {
    'black-white': Blackwhite;
}

export interface Blackwhite {
    animated: Diamondpearl;
    back_default: string;
    back_female?: any;
    back_shiny: string;
    back_shiny_female?: any;
    front_default: string;
    front_female?: any;
    front_shiny: string;
    front_shiny_female?: any;
}

export interface Generationiv {
    'diamond-pearl': Diamondpearl;
    'heartgold-soulsilver': Diamondpearl;
    platinum: Diamondpearl;
}

export interface Diamondpearl {
    back_default: string;
    back_female?: any;
    back_shiny: string;
    back_shiny_female?: any;
    front_default: string;
    front_female?: any;
    front_shiny: string;
    front_shiny_female?: any;
}

export interface Generationiii {
    emerald: Emerald;
    'firered-leafgreen': Crystal;
    'ruby-sapphire': Crystal;
}

export interface Emerald {
    front_default: string;
    front_shiny: string;
}

export interface Generationii {
    crystal: Crystal;
    gold: Crystal;
    silver: Crystal;
}

export interface Crystal {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
}

export interface Generationi {
    'red-blue': Redblue;
    yellow: Redblue;
}

export interface Redblue {
    back_default: string;
    back_gray: string;
    front_default: string;
    front_gray: string;
}

export interface Other {
    dream_world: Dreamworld;
    'official-artwork': Officialartwork;
}

export interface Officialartwork {
    front_default: string;
}

export interface Dreamworld {
    front_default: string;
    front_female?: any;
}

export interface Move {
    move: Ability;
    version_group_details: Versiongroupdetail[];
}

export interface Versiongroupdetail {
    level_learned_at: number;
    move_learn_method: Ability;
    version_group: Ability;
}

export interface Gameindex {
    game_index: number;
    version: Ability;
}

export interface Ability2 {
    ability: Ability;
    is_hidden: boolean;
    slot: number;
}

export interface Ability {
    name: string;
    url: string;
}

export interface EntityState<V> {
    ids: string[] | number[];
    entities: { [id: number]: V };
}
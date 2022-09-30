export interface GameParams {
    id: string;
    name: string;
    ads: string;
    cover: ImageSourcePropType;
  }

export declare global{
    namespace ReactNavigation{
        interface RootParamList{
            hone: undefined;
            game: GameParams;
        }
    }
}
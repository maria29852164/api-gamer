import {GameModel} from './game.interface'

export interface OpinionModel {


    id_opinion:number;

    opinion:string;

    punctuation:number;

    video_opinion:string;

    game:GameModel;
}
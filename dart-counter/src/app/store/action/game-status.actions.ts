import { createAction, props } from '@ngrx/store';
import { GameConfigState } from 'src/app/models/game-config.model';

const actionPrefix = '[GameStatus]';

export const loadGameStatus = createAction(`${actionPrefix} Load GameStatus`);

export const createPlayers = createAction(`${actionPrefix} Create players in game`, (gameConfig: GameConfigState) => ({gameConfig}));

export const updatePlayerPoints = createAction(`${actionPrefix} Update player points`, (name: string, points: number) => ({name, points}));

export const updatePlayerSets = createAction(`${actionPrefix} Update player sets`, (name: string, sets: number) => ({name, sets}));

export const updatePlayerLegs = createAction(`${actionPrefix} Update player legs`, (name: string, legs: number) => ({name, legs}));

export const resetPlayersPoints = createAction(`${actionPrefix} Reset players legs`, (gameConfig: GameConfigState) => ({gameConfig}));

export const calculatePlayerAveragePoints = createAction(`${actionPrefix} Calculate player average points`, (name: string) => ({name}));

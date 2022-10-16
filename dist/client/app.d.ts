declare const dataArray: string[][];
declare const config: {
    totalSkillLevel: number;
    maxNumnerOfMinutes: number;
};
declare class Word {
    id: number;
    hebrew: string;
    arabic: string;
    hebrewTransliterated: string;
    audio: string;
    points: number;
    lastPracticeDate: Date;
    totalPracticeCount: number;
    constructor(fields: Partial<Word>);
    setPoint(points: number): void;
}
declare type Elements = {
    homeBtn: HTMLElement;
    playBtn: HTMLElement;
    appHeader: HTMLElement;
    container: HTMLElement;
    totalRank: HTMLElement;
    speaker: HTMLElement;
    progress: HTMLElement;
};
declare class App {
    constructor();
    totalSkillLevel: number;
    lastWord: Word | undefined;
    isCorectClicked: boolean;
    words: Word[];
    isSoundMuted: boolean;
    backgroundMusic: HTMLAudioElement | undefined;
    audioPath: string;
    elements: Elements;
    answersCounter: number;
    totalWords: number;
    range: (n: number) => number[];
    calculateTotalRank(): number;
    convertDataToObjects(data: string[][]): Word[];
    pickRandomWords(numberOfWords: number): Word[];
    renderCard(word: Word): string;
    onAnswer(id: number): void;
    getAnswers(word: Word): Word[];
    play(): void;
    switchToGameMode(): void;
    syncWords(data: Word[]): void;
    getWords(): Word[];
    calculatePoints(word: Word): number;
    getAllHtmlElements(): Elements;
    init(): Promise<void>;
    createListeners(): void;
    handleSpeakerClick(): void;
    handleHomeClick(): void;
}
declare let app: App;
declare function setupApp(): void;

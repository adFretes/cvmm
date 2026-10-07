export interface ScrambleWordsState {
    currentWord: string;
    errorCounter: number;
    guess: string;
    isGameOver: boolean;
    maxAllowErrors: number;
    maxSkips: number;
    points: number;
    scrambledWord: string;
    skipCounter: number;
    words: string[];
    totalWords: number;
    currentClue: string;
}

const GAME_WORDS = [
    'DIOS',
    'CIELO',
    'SACRAMENTO',
    'THANATOS',
    'NEKROS',
    'GRACIA',
    'CONFIRMACIÓN',
    'EUCARISTÍA',
];

const GAME_WORDS_CLUE = {
    DIOS: 'Yo soy el que soy',
    CIELO: 'mi meta como Cristiano',
    SACRAMENTO: 'medio de Gracia',
    THANATOS: 'muerte natural (separación del alma y del cuerpo)',
    NEKROS: 'muerte espiritual',
    GRACIA: 'auxilio gratuito e inmerecido que Dios nos da',
    CONFIRMACIÓN: 'sacramento que confiere una fuerza especial del Espíritu Santo',
    EUCARISTÍA: 'fuente y culmen de toda la vida cristiana',
};

// Esta función mezcla el arreglo para que siempre sea aleatorio
const shuffleArray = (array: string[]) => {
    return array.sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
const scrambleWord = (word: string = '') => {
    if (word.length <= 1) return word;

    let scrambled = word;
    // Sigue mezclando mientras la palabra resultante sea igual a la original
    while (scrambled === word) {
        scrambled = word
            .split('')
            .sort(() => Math.random() - 0.5)
            .join('');
    }
    return scrambled;
};

export const getInitialState = (): ScrambleWordsState => {
    const shuffledWords = shuffleArray([...GAME_WORDS]);
    const firstWord = shuffledWords[0];
    return {
        currentWord: shuffledWords[0],
        errorCounter: 0,
        guess: '',
        isGameOver: false,
        maxAllowErrors: 3,
        maxSkips: 3,
        points: 0,
        scrambledWord: scrambleWord(firstWord),
        skipCounter: 0,
        words: shuffledWords,
        totalWords: shuffledWords.length,
        currentClue: GAME_WORDS_CLUE[shuffledWords[0] as keyof typeof GAME_WORDS_CLUE],
    };
};

export type ScrambleWordsAction =
    | { type: 'SET_GUESS'; payload: string }
    | { type: 'CHECK_ANSWER' }
    | { type: 'START_NEW_GAME'; payload: ScrambleWordsState }
    | { type: 'SKIP_WORD' };

export const scrambleWordsReducer = (
    state: ScrambleWordsState,
    action: ScrambleWordsAction
): ScrambleWordsState => {
    switch (action.type) {
        case 'SET_GUESS':
            return {
                ...state,
                guess: action.payload.toUpperCase(),
            };

        case 'CHECK_ANSWER': {
            if (state.currentWord === state.guess.trim()) {
                const newWords = state.words.slice(1);
                const nextWord = newWords[0] || '';

                return {
                    ...state,
                    words: newWords,
                    points: state.points + 1,
                    guess: '',
                    currentWord: nextWord,
                    scrambledWord: nextWord ? scrambleWord(nextWord) : '',
                    currentClue: nextWord ? GAME_WORDS_CLUE[nextWord as keyof typeof GAME_WORDS_CLUE] : '',
                };
            }

            return {
                ...state,
                errorCounter: state.errorCounter + 1,
                isGameOver: state.errorCounter + 1 >= state.maxAllowErrors,
            };
        }

        case 'SKIP_WORD': {
            if (state.skipCounter >= state.maxSkips) return state;

            const updatedWords = state.words.slice(1);

            return {
                ...state,
                skipCounter: state.skipCounter + 1,
                words: updatedWords,
                currentWord: updatedWords[0],
                scrambledWord: scrambleWord(updatedWords[0]),
                guess: '',
                currentClue: GAME_WORDS_CLUE[updatedWords[0] as keyof typeof GAME_WORDS_CLUE],
            };
        }

        case 'START_NEW_GAME':
            return action.payload;

        default:
            return state;
    }
};
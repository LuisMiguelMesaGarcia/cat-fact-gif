export const APP_CONSTANTS = {
  TABS: {
    CURRENT: 'current',
    HISTORY: 'history'
  },
  MESSAGES: {
    NO_FACT: 'No hay dato disponible',
    NO_GIF: 'No GIF disponible',
    NO_HISTORY: 'No hay historial disponible',
    LOADING: 'Cargando...',
    ERROR_LOADING_FACT: 'Error al cargar el dato',
    ERROR_LOADING_HISTORY: 'Error al cargar el historial'
  }
} as const;

export type TabType = typeof APP_CONSTANTS.TABS[keyof typeof APP_CONSTANTS.TABS];
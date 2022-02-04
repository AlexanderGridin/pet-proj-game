export interface InitHook {
  init(): void;
}

export interface PreloadHook {
  preload(): void;
}

export interface CreateHook {
  create(): void;
}

export interface UpdateHook {
  update(): void;
}

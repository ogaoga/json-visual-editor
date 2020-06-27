export type Path = string[];

export enum EditType {
  Key,
  Value,
}

export interface EditMode {
  path: Path;
  type: EditType;
}

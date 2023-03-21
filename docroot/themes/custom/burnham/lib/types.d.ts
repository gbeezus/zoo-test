import * as YAML from 'yaml';

type CodeMap = import('./CodeMap');
type SassValue = import('./SassValue');

export interface ParsedSource {
  readonly path: string;
  readonly source: string;
  readonly ast: YAML.ast.Document;
  readonly map: CodeMap;
}

export type MinimaScalar = string | number | boolean;
export interface MinimaObject {
  [key: string]: MinimaScalar | MinimaObject;
}
export type MinimaArray = Array<MinimaData>;

export type MinimaData = MinimaScalar | MinimaObject | MinimaArray;

export interface TransformedSource extends ParsedSource {
  readonly data: MinimaData;
}

export type ScalarTransformer = (
  node: YAML.ast.ScalarNode,
  doc: YAML.ast.Document,
  map: CodeMap,
) => string | number | boolean | SassValue;

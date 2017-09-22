import * as React from 'react';
import ProjectedLayer from './projected-layer';
import * as GeoJSON from 'geojson';
import { getClassName } from './util/classname';
import { Anchor, PointDef } from './util/overlays';

export interface Props {
  coordinates: GeoJSON.Position;
  anchor?: Anchor;
  offset?: number | number[] | PointDef;
  children?: JSX.Element;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
  style?: React.CSSProperties;
  className?: string;
}

const defaultClassName = ['mapboxgl-marker'];

export default class Marker extends React.Component<Props, {}> {
  public render() {
    return <ProjectedLayer
      {...{ ...this.props }}
      className={getClassName(defaultClassName, this.props.className)}
    />
  }
}

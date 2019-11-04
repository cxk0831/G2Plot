import StackArea from '../stack-area';
import PercentageStackAreaLayer, { PercentageStackAreaLayerConfig } from './layer';

export interface PercentageStackAreaConfig extends PercentageStackAreaLayerConfig {}

export default class PercentageStackArea extends StackArea {
  public static getDefaultProps = PercentageStackAreaLayer.getDefaultProps;
  protected init() {
    const layer = new PercentageStackAreaLayer(
      this.getCanvasController(),
      this.getThemeController(),
      this.getPlotRange(),
      this.initialProps
    );
    this.addLayer(layer);
  }
}

/**
 *
 *  (c) 2010-2020 Kamil Kulig
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

'use strict';

import type {
    LinearRegressionOptions,
    LinearRegressionParamsOptions,
    RegressionLineParametersObject
} from '../LinearRegression/LinearRegressionOptions';
import type LinearRegressionSlopesPoint from './LinearRegressionSlopesPoint';
import BaseSeries from '../../../Core/Series/Series.js';
const {
    seriesTypes: {
        sma: SMAIndicator,
        linearRegression: LinearRegressionIndicator
    }
} = BaseSeries;
import U from '../../../Core/Utilities.js';
const {
    isArray,
    extend,
    merge
} = U;

/* *
 *
 * Class
 *
 * */

/**
 * The Linear Regression Slope series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.linearRegressionSlope
 *
 * @augments Highcharts.Series
 */
class LinearRegressionSlopesIndicator extends LinearRegressionIndicator {
    /**
     * Linear regression slope indicator. This series requires `linkedTo`
     * option to be set.
     *
     * @sample {highstock} stock/indicators/linear-regression-slope
     *         Linear regression slope indicator
     *
     * @extends      plotOptions.linearregression
     * @since        7.0.0
     * @product      highstock
     * @requires     stock/indicators/indicators
     * @requires     stock/indicators/regressions
     * @optionparent plotOptions.linearregressionslope
     */
    public static defaultOptions: LinearRegressionParamsOptions =
    LinearRegressionIndicator.defaultOptions as LinearRegressionOptions;

    /* *
     *
     *  Properties
     *
     * */

    public data: Array<LinearRegressionSlopesPoint> = void 0 as any;
    public options: LinearRegressionOptions = void 0 as any;
    public points: Array<LinearRegressionSlopesPoint> = void 0 as any;

    /* *
     *
     *  Functions
     *
     * */

    public getEndPointY(
        lineParameters: RegressionLineParametersObject
    ): number {
        return lineParameters.slope;
    }
}
/**
 * A linear regression slope series. If the
 * [type](#series.linearregressionslope.type) option is not specified, it is
 * inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.linearregressionslope
 * @since     7.0.0
 * @product   highstock
 * @excluding dataParser,dataURL
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/regressions
 * @apioption series.linearregressionslope
 */

/* *
 *
 *  Prototype Properties
 *
 * */
interface LinearRegressionSlopesIndicator {
    pointClass: typeof LinearRegressionSlopesPoint;
}

extend(LinearRegressionSlopesIndicator.prototype, {
    nameBase: 'Linear Regression Slope Indicator'
});

/**
 *
 * Registry
 *
 */

declare module '../../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        linearRegressionSlope: typeof LinearRegressionSlopesIndicator;
    }
}

BaseSeries.registerSeriesType(
    'linearRegressionSlope',
    LinearRegressionSlopesIndicator
);

/* *
 *
 *  Default Export
 *
 * */

export default LinearRegressionSlopesIndicator;

/**
 * A linear regression intercept series. If the
 * [type](#series.linearregressionslopes.type) option is not specified, it is
 * inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.linearregressionslopes
 * @since     7.0.0
 * @product   highstock
 * @excluding dataParser,dataURL
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/regressions
 * @apioption series.linearregressionslopers
 */

''; // to include the above in the js output
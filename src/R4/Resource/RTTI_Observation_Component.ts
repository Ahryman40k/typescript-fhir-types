import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Quantity, IQuantity} from './RTTI_Quantity';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Range, IRange} from './RTTI_Range';
import {RTTI_Ratio, IRatio} from './RTTI_Ratio';
import {RTTI_SampledData, ISampledData} from './RTTI_SampledData';
import {RTTI_Period, IPeriod} from './RTTI_Period';
import {
  RTTI_Observation_ReferenceRange,
  IObservation_ReferenceRange,
} from './RTTI_Observation_ReferenceRange';

export interface IObservation_Component {
  /**
   * Describes what was observed. Sometimes this is called the observation "code".
   */
  code: ICodeableConcept;

  /**
   * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
   */
  extension?: IExtension[];

  /**
                     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
  modifierExtension?: IExtension[];

  /**
   * The information determined as a result of making the observation, if the information has a simple value.
   */
  valueQuantity?: IQuantity;

  /**
   * The information determined as a result of making the observation, if the information has a simple value.
   */
  valueCodeableConcept?: ICodeableConcept;

  /**
   * The information determined as a result of making the observation, if the information has a simple value.
   */
  valueString?: string;

  /**
   * Extensions for valueString
   */
  _valueString?: IElement;

  /**
   * The information determined as a result of making the observation, if the information has a simple value.
   */
  valueBoolean?: boolean;

  /**
   * Extensions for valueBoolean
   */
  _valueBoolean?: IElement;

  /**
   * The information determined as a result of making the observation, if the information has a simple value.
   */
  valueInteger?: number;

  /**
   * Extensions for valueInteger
   */
  _valueInteger?: IElement;

  /**
   * The information determined as a result of making the observation, if the information has a simple value.
   */
  valueRange?: IRange;

  /**
   * The information determined as a result of making the observation, if the information has a simple value.
   */
  valueRatio?: IRatio;

  /**
   * The information determined as a result of making the observation, if the information has a simple value.
   */
  valueSampledData?: ISampledData;

  /**
   * The information determined as a result of making the observation, if the information has a simple value.
   */
  valueTime?: string;

  /**
   * Extensions for valueTime
   */
  _valueTime?: IElement;

  /**
   * The information determined as a result of making the observation, if the information has a simple value.
   */
  valueDateTime?: string;

  /**
   * Extensions for valueDateTime
   */
  _valueDateTime?: IElement;

  /**
   * The information determined as a result of making the observation, if the information has a simple value.
   */
  valuePeriod?: IPeriod;

  /**
   * Provides a reason why the expected value in the element Observation.component.value[x] is missing.
   */
  dataAbsentReason?: ICodeableConcept;

  /**
   * A categorical assessment of an observation value.  For example, high, low, normal.
   */
  interpretation?: ICodeableConcept[];

  /**
   * Guidance on how to interpret the value by comparison to a normal or recommended range.
   */
  referenceRange?: IObservation_ReferenceRange[];
}

export const RTTI_Observation_Component: t.Type<IObservation_Component> =
  t.recursion('IObservation_Component', () =>
    t.intersection([
      t.type({
        code: RTTI_CodeableConcept,
      }),
      t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        valueQuantity: RTTI_Quantity,
        valueCodeableConcept: RTTI_CodeableConcept,
        valueString: t.string,
        _valueString: RTTI_Element,
        valueBoolean: t.boolean,
        _valueBoolean: RTTI_Element,
        valueInteger: t.number,
        _valueInteger: RTTI_Element,
        valueRange: RTTI_Range,
        valueRatio: RTTI_Ratio,
        valueSampledData: RTTI_SampledData,
        valueTime: t.string,
        _valueTime: RTTI_Element,
        valueDateTime: t.string,
        _valueDateTime: RTTI_Element,
        valuePeriod: RTTI_Period,
        dataAbsentReason: RTTI_CodeableConcept,
        interpretation: t.array(RTTI_CodeableConcept),
        referenceRange: t.array(RTTI_Observation_ReferenceRange),
      }),
    ]),
  );

import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {
  RTTI_MeasureReport_Population,
  IMeasureReport_Population,
} from './RTTI_MeasureReport_Population';
import {RTTI_Quantity, IQuantity} from './RTTI_Quantity';
import {
  RTTI_MeasureReport_Stratifier,
  IMeasureReport_Stratifier,
} from './RTTI_MeasureReport_Stratifier';

export interface IMeasureReport_Group {
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
   * The meaning of the population group as defined in the measure definition.
   */
  code?: ICodeableConcept;

  /**
   * The populations that make up the population group, one for each type of population appropriate for the measure.
   */
  population?: IMeasureReport_Population[];

  /**
   * The measure score for this population group, calculated as appropriate for the measure type and scoring method, and based on the contents of the populations defined in the group.
   */
  measureScore?: IQuantity;

  /**
   * When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measure.
   */
  stratifier?: IMeasureReport_Stratifier[];
}

export const RTTI_MeasureReport_Group: t.Type<IMeasureReport_Group> =
  t.recursion('IMeasureReport_Group', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      code: RTTI_CodeableConcept,
      population: t.array(RTTI_MeasureReport_Population),
      measureScore: RTTI_Quantity,
      stratifier: t.array(RTTI_MeasureReport_Stratifier),
    }),
  );

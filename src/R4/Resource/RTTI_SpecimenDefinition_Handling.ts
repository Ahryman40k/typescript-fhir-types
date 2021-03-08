import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Range, IRange} from './RTTI_Range';
import {RTTI_Duration, IDuration} from './RTTI_Duration';
import {RTTI_Element, IElement} from './RTTI_Element';

export interface ISpecimenDefinition_Handling {
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
   * It qualifies the interval of temperature, which characterizes an occurrence of handling. Conditions that are not related to temperature may be handled in the instruction element.
   */
  temperatureQualifier?: ICodeableConcept;

  /**
   * The temperature interval for this set of handling instructions.
   */
  temperatureRange?: IRange;

  /**
   * The maximum time interval of preservation of the specimen with these conditions.
   */
  maxDuration?: IDuration;

  /**
   * Additional textual instructions for the preservation or transport of the specimen. For instance, 'Protect from light exposure'.
   */
  instruction?: string;

  /**
   * Extensions for instruction
   */
  _instruction?: IElement;
}

export const RTTI_SpecimenDefinition_Handling: t.Type<ISpecimenDefinition_Handling> = t.recursion(
  'ISpecimenDefinition_Handling',
  () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      temperatureQualifier: RTTI_CodeableConcept,
      temperatureRange: RTTI_Range,
      maxDuration: RTTI_Duration,
      instruction: t.string,
      _instruction: RTTI_Element,
    }),
);

import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_integer} from '../Scalar/RTTI_integer';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Reference, IReference} from './RTTI_Reference';

export interface IMeasureReport_Population1 {
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
   * The type of the population.
   */
  code?: ICodeableConcept;

  /**
   * The number of members of the population in this stratum.
   */
  count?: number;

  /**
   * Extensions for count
   */
  _count?: IElement;

  /**
   * This element refers to a List of subject level MeasureReport resources, one for each subject in this population in this stratum.
   */
  subjectResults?: IReference;
}

export const RTTI_MeasureReport_Population1: t.Type<IMeasureReport_Population1> =
  t.recursion('IMeasureReport_Population1', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      code: RTTI_CodeableConcept,
      count: RTTI_integer,
      _count: RTTI_Element,
      subjectResults: RTTI_Reference,
    }),
  );

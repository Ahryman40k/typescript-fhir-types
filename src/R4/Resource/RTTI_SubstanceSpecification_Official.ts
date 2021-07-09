import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_dateTime} from '../Scalar/RTTI_dateTime';
import {RTTI_Element, IElement} from './RTTI_Element';

export interface ISubstanceSpecification_Official {
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
   * Which authority uses this official name.
   */
  authority?: ICodeableConcept;

  /**
   * The status of the official name.
   */
  status?: ICodeableConcept;

  /**
   * Date of official name change.
   */
  date?: string;

  /**
   * Extensions for date
   */
  _date?: IElement;
}

export const RTTI_SubstanceSpecification_Official: t.Type<ISubstanceSpecification_Official> =
  t.recursion('ISubstanceSpecification_Official', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      authority: RTTI_CodeableConcept,
      status: RTTI_CodeableConcept,
      date: RTTI_dateTime,
      _date: RTTI_Element,
    }),
  );

import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_dateTime} from '../Scalar/RTTI_dateTime';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Reference, IReference} from './RTTI_Reference';

export interface ISubstanceSpecification_Code {
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
   * The specific code.
   */
  code?: ICodeableConcept;

  /**
   * Status of the code assignment.
   */
  status?: ICodeableConcept;

  /**
   * The date at which the code status is changed as part of the terminology maintenance.
   */
  statusDate?: string;

  /**
   * Extensions for statusDate
   */
  _statusDate?: IElement;

  /**
   * Any comment can be provided in this field, if necessary.
   */
  comment?: string;

  /**
   * Extensions for comment
   */
  _comment?: IElement;

  /**
   * Supporting literature.
   */
  source?: IReference[];
}

export const RTTI_SubstanceSpecification_Code: t.Type<ISubstanceSpecification_Code> =
  t.recursion('ISubstanceSpecification_Code', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      code: RTTI_CodeableConcept,
      status: RTTI_CodeableConcept,
      statusDate: RTTI_dateTime,
      _statusDate: RTTI_Element,
      comment: t.string,
      _comment: RTTI_Element,
      source: t.array(RTTI_Reference),
    }),
  );

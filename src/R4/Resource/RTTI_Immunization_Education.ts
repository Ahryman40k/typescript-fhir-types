import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_uri} from '../Scalar/RTTI_uri';
import {RTTI_dateTime} from '../Scalar/RTTI_dateTime';

export interface IImmunization_Education {
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
   * Identifier of the material presented to the patient.
   */
  documentType?: string;

  /**
   * Extensions for documentType
   */
  _documentType?: IElement;

  /**
   * Reference pointer to the educational material given to the patient if the information was on line.
   */
  reference?: string;

  /**
   * Extensions for reference
   */
  _reference?: IElement;

  /**
   * Date the educational material was published.
   */
  publicationDate?: string;

  /**
   * Extensions for publicationDate
   */
  _publicationDate?: IElement;

  /**
   * Date the educational material was given to the patient.
   */
  presentationDate?: string;

  /**
   * Extensions for presentationDate
   */
  _presentationDate?: IElement;
}

export const RTTI_Immunization_Education: t.Type<IImmunization_Education> =
  t.recursion('IImmunization_Education', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      documentType: t.string,
      _documentType: RTTI_Element,
      reference: RTTI_uri,
      _reference: RTTI_Element,
      publicationDate: RTTI_dateTime,
      _publicationDate: RTTI_Element,
      presentationDate: RTTI_dateTime,
      _presentationDate: RTTI_Element,
    }),
  );

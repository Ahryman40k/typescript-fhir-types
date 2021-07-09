import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Identifier, IIdentifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_dateTime} from '../Scalar/RTTI_dateTime';
import {RTTI_Element, IElement} from './RTTI_Element';

export interface IMedicinalProduct_SpecialDesignation {
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
   * Identifier for the designation, or procedure number.
   */
  identifier?: IIdentifier[];

  /**
   * The type of special designation, e.g. orphan drug, minor use.
   */
  type?: ICodeableConcept;

  /**
   * The intended use of the product, e.g. prevention, treatment.
   */
  intendedUse?: ICodeableConcept;

  /**
   * Condition for which the medicinal use applies.
   */
  indicationCodeableConcept?: ICodeableConcept;

  /**
   * Condition for which the medicinal use applies.
   */
  indicationReference?: IReference;

  /**
   * For example granted, pending, expired or withdrawn.
   */
  status?: ICodeableConcept;

  /**
   * Date when the designation was granted.
   */
  date?: string;

  /**
   * Extensions for date
   */
  _date?: IElement;

  /**
   * Animal species for which this applies.
   */
  species?: ICodeableConcept;
}

export const RTTI_MedicinalProduct_SpecialDesignation: t.Type<IMedicinalProduct_SpecialDesignation> =
  t.recursion('IMedicinalProduct_SpecialDesignation', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      identifier: t.array(RTTI_Identifier),
      type: RTTI_CodeableConcept,
      intendedUse: RTTI_CodeableConcept,
      indicationCodeableConcept: RTTI_CodeableConcept,
      indicationReference: RTTI_Reference,
      status: RTTI_CodeableConcept,
      date: RTTI_dateTime,
      _date: RTTI_Element,
      species: RTTI_CodeableConcept,
    }),
  );

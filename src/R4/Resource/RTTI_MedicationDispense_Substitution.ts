import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference, IReference} from './RTTI_Reference';

export interface IMedicationDispense_Substitution {
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
   * True if the dispenser dispensed a different drug or product from what was prescribed.
   */
  wasSubstituted?: boolean;

  /**
   * Extensions for wasSubstituted
   */
  _wasSubstituted?: IElement;

  /**
   * A code signifying whether a different drug was dispensed from what was prescribed.
   */
  type?: ICodeableConcept;

  /**
   * Indicates the reason for the substitution (or lack of substitution) from what was prescribed.
   */
  reason?: ICodeableConcept[];

  /**
   * The person or organization that has primary responsibility for the substitution.
   */
  responsibleParty?: IReference[];
}

export const RTTI_MedicationDispense_Substitution: t.Type<IMedicationDispense_Substitution> =
  t.recursion('IMedicationDispense_Substitution', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      wasSubstituted: t.boolean,
      _wasSubstituted: RTTI_Element,
      type: RTTI_CodeableConcept,
      reason: t.array(RTTI_CodeableConcept),
      responsibleParty: t.array(RTTI_Reference),
    }),
  );

import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_HumanName, IHumanName} from './RTTI_HumanName';
import {RTTI_ContactPoint, IContactPoint} from './RTTI_ContactPoint';
import {RTTI_Address, IAddress} from './RTTI_Address';

export interface IInsurancePlan_Contact {
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
   * Indicates a purpose for which the contact can be reached.
   */
  purpose?: ICodeableConcept;

  /**
   * A name associated with the contact.
   */
  name?: IHumanName;

  /**
   * A contact detail (e.g. a telephone number or an email address) by which the party may be contacted.
   */
  telecom?: IContactPoint[];

  /**
   * Visiting or postal addresses for the contact.
   */
  address?: IAddress;
}

export const RTTI_InsurancePlan_Contact: t.Type<IInsurancePlan_Contact> =
  t.recursion('IInsurancePlan_Contact', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      purpose: RTTI_CodeableConcept,
      name: RTTI_HumanName,
      telecom: t.array(RTTI_ContactPoint),
      address: RTTI_Address,
    }),
  );

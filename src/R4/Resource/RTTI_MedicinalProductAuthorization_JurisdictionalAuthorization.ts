import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Identifier, IIdentifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Period, IPeriod} from './RTTI_Period';

export interface IMedicinalProductAuthorization_JurisdictionalAuthorization {
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
   * The assigned number for the marketing authorization.
   */
  identifier?: IIdentifier[];

  /**
   * Country of authorization.
   */
  country?: ICodeableConcept;

  /**
   * Jurisdiction within a country.
   */
  jurisdiction?: ICodeableConcept[];

  /**
   * The legal status of supply in a jurisdiction or region.
   */
  legalStatusOfSupply?: ICodeableConcept;

  /**
   * The start and expected end date of the authorization.
   */
  validityPeriod?: IPeriod;
}

export const RTTI_MedicinalProductAuthorization_JurisdictionalAuthorization: t.Type<IMedicinalProductAuthorization_JurisdictionalAuthorization> =
  t.recursion(
    'IMedicinalProductAuthorization_JurisdictionalAuthorization',
    () =>
      t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        identifier: t.array(RTTI_Identifier),
        country: RTTI_CodeableConcept,
        jurisdiction: t.array(RTTI_CodeableConcept),
        legalStatusOfSupply: RTTI_CodeableConcept,
        validityPeriod: RTTI_Period,
      }),
  );

import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {
  RTTI_InsurancePlan_Benefit,
  IInsurancePlan_Benefit,
} from './RTTI_InsurancePlan_Benefit';

export interface IInsurancePlan_Coverage {
  /**
   * Type of coverage  (Medical; Dental; Mental Health; Substance Abuse; Vision; Drug; Short Term; Long Term Care; Hospice; Home Health).
   */
  type: ICodeableConcept;

  /**
   * Specific benefits under this type of coverage.
   */
  benefit: IInsurancePlan_Benefit[];

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
   * Reference to the network that providing the type of coverage.
   */
  network?: IReference[];
}

export const RTTI_InsurancePlan_Coverage: t.Type<IInsurancePlan_Coverage> =
  t.recursion('IInsurancePlan_Coverage', () =>
    t.intersection([
      t.type({
        type: RTTI_CodeableConcept,
        benefit: t.array(RTTI_InsurancePlan_Benefit),
      }),
      t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        network: t.array(RTTI_Reference),
      }),
    ]),
  );

import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {
  RTTI_MedicationKnowledge_Substitution,
  IMedicationKnowledge_Substitution,
} from './RTTI_MedicationKnowledge_Substitution';
import {
  RTTI_MedicationKnowledge_Schedule,
  IMedicationKnowledge_Schedule,
} from './RTTI_MedicationKnowledge_Schedule';
import {
  RTTI_MedicationKnowledge_MaxDispense,
  IMedicationKnowledge_MaxDispense,
} from './RTTI_MedicationKnowledge_MaxDispense';

export interface IMedicationKnowledge_Regulatory {
  /**
   * The authority that is specifying the regulations.
   */
  regulatoryAuthority: IReference;

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
   * Specifies if changes are allowed when dispensing a medication from a regulatory perspective.
   */
  substitution?: IMedicationKnowledge_Substitution[];

  /**
   * Specifies the schedule of a medication in jurisdiction.
   */
  schedule?: IMedicationKnowledge_Schedule[];

  /**
   * The maximum number of units of the medication that can be dispensed in a period.
   */
  maxDispense?: IMedicationKnowledge_MaxDispense;
}

export const RTTI_MedicationKnowledge_Regulatory: t.Type<IMedicationKnowledge_Regulatory> =
  t.recursion('IMedicationKnowledge_Regulatory', () =>
    t.intersection([
      t.type({
        regulatoryAuthority: RTTI_Reference,
      }),
      t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        substitution: t.array(RTTI_MedicationKnowledge_Substitution),
        schedule: t.array(RTTI_MedicationKnowledge_Schedule),
        maxDispense: RTTI_MedicationKnowledge_MaxDispense,
      }),
    ]),
  );

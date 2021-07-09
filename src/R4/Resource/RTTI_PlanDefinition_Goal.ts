import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_RelatedArtifact, IRelatedArtifact} from './RTTI_RelatedArtifact';
import {
  RTTI_PlanDefinition_Target,
  IPlanDefinition_Target,
} from './RTTI_PlanDefinition_Target';

export interface IPlanDefinition_Goal {
  /**
   * Human-readable and/or coded description of a specific desired objective of care, such as "control blood pressure" or "negotiate an obstacle course" or "dance with child at wedding".
   */
  description: ICodeableConcept;

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
   * Indicates a category the goal falls within.
   */
  category?: ICodeableConcept;

  /**
   * Identifies the expected level of importance associated with reaching/sustaining the defined goal.
   */
  priority?: ICodeableConcept;

  /**
   * The event after which the goal should begin being pursued.
   */
  start?: ICodeableConcept;

  /**
   * Identifies problems, conditions, issues, or concerns the goal is intended to address.
   */
  addresses?: ICodeableConcept[];

  /**
   * Didactic or other informational resources associated with the goal that provide further supporting information about the goal. Information resources can include inline text commentary and links to web resources.
   */
  documentation?: IRelatedArtifact[];

  /**
   * Indicates what should be done and within what timeframe.
   */
  target?: IPlanDefinition_Target[];
}

export const RTTI_PlanDefinition_Goal: t.Type<IPlanDefinition_Goal> =
  t.recursion('IPlanDefinition_Goal', () =>
    t.intersection([
      t.type({
        description: RTTI_CodeableConcept,
      }),
      t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        category: RTTI_CodeableConcept,
        priority: RTTI_CodeableConcept,
        start: RTTI_CodeableConcept,
        addresses: t.array(RTTI_CodeableConcept),
        documentation: t.array(RTTI_RelatedArtifact),
        target: t.array(RTTI_PlanDefinition_Target),
      }),
    ]),
  );
